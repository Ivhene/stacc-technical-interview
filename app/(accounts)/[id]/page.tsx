import { AccountIdParams } from "@/types/paramTypes";

export default async function ShowAccount({ params }: AccountIdParams) {
  const id = parseInt(params.id);

  const response = fetch(`http://localhost:3000/api/accounts/${id}`);

  return <div>{id}</div>;
}
