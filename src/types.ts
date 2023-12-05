export type ErroDetails = {
  cause?: Error;
  origin?: string;
  details?: unknown;
};

export enum ErrorOrigin {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
  SMTP = 'SMTP',
  HTTP = 'HTTP',
  DATABASE = 'DATABASE',
  CACHE = 'CACHE',
  AMQP = 'AMQP',
  UNKNOWN = 'UNKNOWN',
}

export enum HttpClientError {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PayloadTooLarge = 413,
  UnsupportedMediaType = 415,
  ExpectationFailed = 417,
  ImATeapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
}

export enum HttpServerError {
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}

export const HttpErrors = {
  ...HttpClientError,
  ...HttpServerError,
};
export type HttpErrors = typeof HttpErrors;
