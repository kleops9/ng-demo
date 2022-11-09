export interface HttpError {
  name: "HttpErrorResponse";
  code: string;
  status: number;
  message: string;
}
