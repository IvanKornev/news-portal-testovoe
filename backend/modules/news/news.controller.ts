import { Request, Response } from 'express';

import NewsDTO from './news.dto';
import service from './news.service';
import messages from './news.messages';

class NewsController {
  public async getAll(request: Request, response: Response) {
    const allNews = await service.getAll();
    return response.status(201).json({ allNews });
  }

  public async get(request: Request, response: Response) {
    const newsId: string = request.params.id;
    const news = await service.get(newsId);
    return response.status(201).json({ news });
  }

  public async create(request: Request, response: Response) {
    const creatingNews: NewsDTO = request.body;
    try {
      return response.status(201).json({
        createdNews: await service.create(creatingNews),
        message: messages.create,
      });
    } catch(error: any) {
      const message = error.message.split(': ').pop();
      return response.status(400).json({ message });
    }
  }

  public async update(request: Request, response: Response) {
    const updatingNews: NewsDTO = request.body;
    const id: string = request.params.id;
    try {
      return response.status(201).json({
        createdNews: await service.update(id, updatingNews),
        message: messages.update,
      });
    } catch(error: any) {
      const message = error.message.split(': ').pop();
      return response.status(400).json({ message });
    }
  }

  public async delete(request: Request, response: Response) {
    const newsId: string = request.params.id;
    return response.status(201).json({
      deletedNews: await service.delete(newsId),
      message: messages.delete,
    });
  }
}

export default new NewsController();
