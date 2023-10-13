import { Account } from "./types";

export type GetAccountParams = {
  params: { id: string };
};

export type AccountSelectParams = {
  accounts: Account[];
};
