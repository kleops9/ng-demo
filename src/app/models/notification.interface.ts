export interface Notification {
  duration: number;
  type: "error" | "success";
  message: string;
}
