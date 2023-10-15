import AccountView from "@/components/showAccount/AccountView";
import { AccountIdParams } from "@/types/paramTypes";

async function getData(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/accounts/${id}`
  );

  return await response.json();
}

export default async function ShowAccount({ params }: AccountIdParams) {
  console.log("New Page Reached");

  const id = parseInt(params.id);

  const data = await getData(id);

  return <AccountView account={data.account} />;
}
