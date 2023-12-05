/**
 * Many frameworks look for the http status code by looking for properties "status", "statusCode" or "code" in that order. 
 * For that reason we will make "status" an integer to match the spec "https://www.rfc-editor.org/rfc/rfc9110.html#name-extending-http"
 * And we will make "statusCode" a string to help frameworks
 */

import { HttpClientError, HttpServerError } from "../types";


export type HttpErrorConfig = {
  message: string;
  status: number;
  errorId?: string;
  details?: unknown;
}

export class HttpError extends Error {
  public status: number;
  public errorId: string;
  public details?: unknown;

  constructor({ message, status, errorId, details }: HttpErrorConfig) {
    super(message);
    this.status = status;
    this.errorId = errorId || '';
    this.details = details;
    this.name = this.constructor.name;

  
  }

  get statusCode(): string {
    return this.status.toString();
  }

  #setErrorId() {
  if (!this.errorId) {
      if (this.status >= 500) {
        this.errorId = HttpServerError[this.status]
      }

      if (this.status < 500 && this.status >= 400) {
        this.errorId = HttpClientError[this.status]
      }
    }
  }
}


