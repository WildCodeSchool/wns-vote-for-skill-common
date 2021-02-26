import {CustomError} from './CustomError';

export class BadRequestError extends CustomError {
  status = 400;

  serializeError(): { status: number; errors: string[] } {
    return {
      status: 400,
      errors: [this.message],
    };
  }
}
