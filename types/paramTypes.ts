import { Account } from "./types";

export type AccountIdParams = {
  params: { id: string };
};

export type AccountSelectParams = {
  accounts: Account[];
};

export type ShowAccountParams = {
  account: Account;
};
