export type IPriority = "high" | "medium" | "low";
export interface ITickets {
  id: number;
  title: string;
  body: string;
  priority: IPriority;
  user_email: string;
}
