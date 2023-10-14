"use client";
import { AccountSelectParams } from "@/types/paramTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSelect({ accounts }: AccountSelectParams) {
  const path = usePathname();
  console.log(path);
  const showAccounts = () => {
    return accounts.map((account) => {
      return (
        <Link key={account.accountID} href={`/${account.accountID}`}>
          <div className="h-[100px] rounded-3xl text-center bg-amber-100 border border-amber-400">
            <p>{account.accountID}</p>
            <p>{account.accountName}</p>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className="fixed inset-0 bg-amber-100 flex justify-center items-center">
      <div className="bg-amber-50 text-neutral-800 grid grid-cols-5 w-[80%] rounded-3xl p-10 items-center gap-8 border border-amber-400">
        {showAccounts()}
      </div>
    </div>
  );
}
