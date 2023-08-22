export interface ITickets {
  id: number;
  title: string;
  body: string;
  priority: "high" | "medium" | "low";
  user_email: string;
}
