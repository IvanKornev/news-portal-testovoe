import { compare, hash } from 'bcrypt';
import model from './user.model';
import UserDTO from './user.dto';

class UserService {
  public async add(user: UserDTO) {
    await this.alreadyExist(user);
    this.passwordIsNotEmpty(user.password);
    
    const creatingUser = {
      username: user.username,
      passwordHash: await hash(user.password, 5),
    };
    const createdUser = model.create(creatingUser);
    return createdUser;
  }

  public async get(user: UserDTO) {
    const { username, password } = user;
    this.passwordIsNotEmpty(password);
    const gotUser: any = await model.findOne({ username }).select('+passwordHash');
    this.wasFound(gotUser);

    const { passwordHash } = gotUser;
    await this.passwordsAreEquals(user.password, passwordHash);
    return gotUser;
  }

  private async alreadyExist (user: UserDTO): Promise<boolean> {
    const existingUser = await model.findOne({ username: user.username });
    if (existingUser) {
      throw new Error('Ошибка: Такой пользователь уже зарегистрирован');
    }
    return false;
  }

  private async passwordsAreEquals(password: string, hash: string) {
    const areEquals = await compare(password, hash);
    if (!areEquals) {
      throw new Error('Введен неверный пароль');
    };
  }

  private wasFound(user: object | null): boolean {
    if (!user) {
      throw new Error('Ошибка: Такого пользователя не существует');
    }
    return true;
  }

  private passwordIsNotEmpty(password: string): boolean {
    if (!password) {
      throw new Error('Ошибка:  Должен быть обязательно задан пароль');
    }
    return true;
  }
}

export default new UserService();
