export type Goal = {
  goalID: number;
  goalName: string;
  goalTarget: number;
};
export type Account = {
  accountID: number;
  accountName: string;
  balance: number;
  goals: Goal[];
};
