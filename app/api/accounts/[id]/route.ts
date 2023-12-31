import { AccountIdParams } from "@/types/paramTypes";
import { Account } from "@/types/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: AccountIdParams) {
  const id = parseInt(params.id);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/accounts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  if (!data.accounts || !Array.isArray(data.accounts)) {
    throw new Error(
      "Invalid data format: 'accounts' is missing or not an array."
    );
  }

  const matchingAccount = data.accounts.find((account: Account) => {
    return account.accountID === id;
  });

  if (!matchingAccount) {
    throw new Error("Account not found");
  }

  return NextResponse.json({ account: matchingAccount });
}
