import { HttpError } from '../HttpError/http.error';
import { HttpClientError } from '../types';

export type ClientErrorConfig = {
  message: string;
  errorId?: string;
  details?: unknown;
};

export class ClientErrorFactory {
  static createError(code: HttpClientError) {
    const ClientError = class extends HttpError {
      constructor({ message, errorId, details }: ClientErrorConfig) {
        super({
          message,
          status: code,
          errorId,
          details,
        });
      }
    };

    return new Proxy(ClientError, {
      construct(target, config: [ClientErrorConfig]) {
        return new target(...config);
      },
    });
  }
}

type ClientErrorBuilder = {
  [key in keyof typeof HttpClientError]: HttpError;
};

export const ClientErrors = new Proxy(ClientErrorFactory, {
  get(target, errorType: keyof typeof HttpClientError) {
    if (errorType in HttpClientError) {
      return target.createError(HttpClientError[errorType]);
    }

    return Reflect.get(target, errorType) as HttpError;
  },
}) as unknown as ClientErrorBuilder;
