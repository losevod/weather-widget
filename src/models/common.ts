export interface GeneralError {
   message: string;
   code: number;
 }

export interface ApiResult<T> {
   data: T | null;
   error: GeneralError | null;
 }