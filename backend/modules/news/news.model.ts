import mongoose from 'mongoose';

const { Schema } = mongoose;
const newsSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Название статьи - обязательно'],
    max: [40, 'Максимальная длина названия статьи - 40 символа'],
  },
  body: {
    type: String,
    required: [true, 'Текст статьи - обязателен'],
  },
  author: {
    type: Schema.Types.ObjectId,
    required: [true, 'Данные автора - обязательны'],
    ref: 'user',
  }
});

const newsModel = mongoose.model('news', newsSchema);
export default newsModel;
