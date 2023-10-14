import { Account, Goal } from "./types";

export type AccountIdParams = {
  params: { id: string };
};

export type AccountSelectParams = {
  accounts: Account[];
};

export type ShowAccountParams = {
  account: Account;
};

export type UpcomingAndReachedParams = {
  upcoming: Goal[];
  reached: Goal[];
};
