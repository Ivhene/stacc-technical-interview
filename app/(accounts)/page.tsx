import AccountSelect from "@/components/AccountSelect";
import Image from "next/image";

export default async function Accounts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/accounts`);

  if (!res.ok) {
    console.log("Fetch failed");
  }

  const data = await res.json();

  console.log(data.accounts);

  return <AccountSelect accounts={data.accounts} />;
}
