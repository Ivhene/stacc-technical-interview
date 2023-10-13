import Image from "next/image";

export default async function Accounts() {
  const res = await fetch("http://localhost:3000/api/accounts");

  if (!res.ok) {
    console.log("Fetch failed");
  }

  const data = await res.json();

  return <div>Stacc interview</div>;
}
