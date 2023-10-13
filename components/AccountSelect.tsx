import { AccountSelectParams } from "@/types/paramTypes";
import Link from "next/link";

export default function AccountSelect({ accounts }: AccountSelectParams) {
  const showAccounts = () => {
    return accounts.map((account) => {
      return (
        <Link key={account.accountID} href={`/${account.accountID}`}>
          <div>
            <p>{account.accountID}</p>
            <p>{account.accountName}</p>
          </div>
        </Link>
      );
    });
  };

  return <div>{showAccounts()}</div>;
}
