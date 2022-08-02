import { Request, Response } from 'express';
import { messages } from './authentication.messages';

import facade from './authentication.facade';
import UserDTO from '../user/user.dto';

class AuthenticationController {
  public async register(request: Request, response: Response) {
    const user: UserDTO = request.body;
    try {
      await facade.register(user);
      return response.status(201).json({
        message: messages.registration.success,
      });
    } catch(error: any) {
      const message = error.message.split(': ').pop();
      return response.status(400).json({ message });
    }
  }

  public async authorize(request: Request, response: Response) {
    const user: UserDTO = request.body;
    try {
      return response.status(201).json({
        token: await facade.authorize(user),
        message: messages.authorization.success,
      });
    } catch(error: any) {
      const message = error.message.split(': ').pop();
      return response.status(400).json({ message });
    }
  }
}

export default new AuthenticationController();
