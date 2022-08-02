import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Имя пользователя - обязательно'],
    unique: [true, 'Имя пользователя должно быть уникальным'],
    min: [4, 'Минимальная длина имени пользователя - 4 символа'],
    max: [24, 'Максимальная длина имени пользователя - 24 символа'],
  },
  passwordHash: {
    type: String,
    select: false,
    required: [true, 'Пароль - обязателен!'],
  },
});

const userModel = mongoose.model('user', userSchema);
export default userModel;
