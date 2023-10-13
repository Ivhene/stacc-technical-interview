import { AccountIdParams } from "@/types/paramTypes";

export default async function ShowAccount({ params }: AccountIdParams) {
  const id = parseInt(params.id);

  const response = await fetch(`http://localhost:3000/api/accounts/${id}`);

  const account = await response.json();

  return <div>{id}</div>;
}