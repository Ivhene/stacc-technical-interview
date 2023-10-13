import { AccountIdParams } from "@/types/paramTypes";

export default async function ShowAccount({ params }: AccountIdParams) {
  const id = params.id;

  return <div>{id}</div>;
}
