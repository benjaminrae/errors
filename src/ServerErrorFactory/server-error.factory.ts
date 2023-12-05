import { HttpError } from '../HttpError/http.error';
import { type HttpServerError } from '../types';

export type ServerErrorConfig = {
  message: string;
  errorId?: string;
  details?: unknown;
};

export class ServerErrorFactory {
  static createError(code: HttpServerError) {
    const ServerError = class extends HttpError {
      constructor({ message, errorId, details }: ServerErrorConfig) {
        super({ message, status: code, errorId, details });
        this.name = this.constructor.name;
      }
    };

    return new Proxy(ServerError, {
      construct(target, config: [ServerErrorConfig]) {
        return new target(...config);
      },
    });
  }
}
