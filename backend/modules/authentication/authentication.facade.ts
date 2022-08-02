import { hash, compare } from 'bcrypt';
import tokenService from '../web-token/web-token.service';
import userService from '../user/user.service';
import UserDTO from '../user/user.dto';

class AuthenticationFacade {
  public async register(user: UserDTO) {
    const createdUser = await userService.add(user);
    return createdUser;
  }

  public async authorize(user: UserDTO) {
    const gotUser = await userService.get(user);
    if (gotUser) {
      const payload: object = {
        id: gotUser._id,
        username: gotUser.username,
      };
      const token = tokenService.generate(payload);
      return token;
    }
  }
}

export default new AuthenticationFacade();
