export type IPriority = "high" | "medium" | "low";
export interface ITicket {
  id: number;
  title: string;
  body: string;
  priority: IPriority;
  user_email?: string;
}
