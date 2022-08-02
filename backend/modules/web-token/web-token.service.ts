import jwt from 'jsonwebtoken';

class WebTokenService {
  private secret: string = <string>process.env.TOKEN_SECRET;
  private params: object = {
    expiresIn: '365 days',
  };

  public generate(payload: object) {
    const token = jwt.sign(payload, this.secret, this.params);
    return token;
  }

  public verify(token: string) {
    try {
      const payload = jwt.verify(token, this.secret);
      return payload;
    } catch {
      return null;
    }
  }
}

export default new WebTokenService();
