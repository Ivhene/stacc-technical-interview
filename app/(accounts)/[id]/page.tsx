import AccountView from "@/components/showAccount/AccountView";
import { AccountIdParams } from "@/types/paramTypes";
import { Account } from "@/types/types";

export default async function ShowAccount({ params }: AccountIdParams) {
  const id = parseInt(params.id);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/accounts/${id}`
  );

  const data = await response.json();

  return <AccountView account={data.account} />;
}
