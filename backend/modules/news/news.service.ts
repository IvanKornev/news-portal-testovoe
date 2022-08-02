import model from './news.model';
import NewsDTO from './news.dto';

class NewsService {
  public async getAll() {
    const allNews = await model.find().populate('author');
    return allNews;
  }

  public async get(id: string) {
    const foundNews = await model.findById(id).populate('author');
    return foundNews;
  }

  public async create(news: NewsDTO) {
    const createdNews = await model.create(news);
    const results = await model.findById(createdNews._id).populate('author');
    return results;
  }

  public async update(id: string, news: NewsDTO) {
    const updatedNews = await model.findByIdAndUpdate(id, news);
    return updatedNews;
  }

  public async delete(id: string) {
    const deletedNews = await model.findByIdAndDelete(id);
    return deletedNews;
  }
}

export default new NewsService();
