import { Account, Goal } from "@/types/types";
import { NextResponse } from "next/server";

let accounts: Account[] = [
  {
    accountID: 1234,
    accountName: "Siri Savings",
    balance: 45000.0,
    goals: [
      {
        goalID: 1,
        goalName: "Milestone 1",
        goalTarget: 5000.0,
      },
      {
        goalID: 2,
        goalName: "Milestone 2",
        goalTarget: 10000.0,
      },
      {
        goalID: 3,
        goalName: "Milestone 3",
        goalTarget: 15000.0,
      },
      {
        goalID: 4,
        goalName: "Milestone 4",
        goalTarget: 25000.0,
      },
      {
        goalID: 5,
        goalName: "Milestone 5",
        goalTarget: 50000.0,
      },
      {
        goalID: 6,
        goalName: "Milestone 6",
        goalTarget: 100000.0,
      },
      {
        goalID: 7,
        goalName: "Milestone 7",
        goalTarget: 250000.0,
      },
      {
        goalID: 8,
        goalName: "Milestone 8",
        goalTarget: 500000.0,
      },
    ],
  },
  {
    accountID: 4321,
    accountName: "Alice Savings",
    balance: 487.71,
    goals: [
      {
        goalID: 1,
        goalName: "Milestone 1",
        goalTarget: 5000.0,
      },
      {
        goalID: 2,
        goalName: "Milestone 2",
        goalTarget: 10000.0,
      },
      {
        goalID: 3,
        goalName: "Milestone 3",
        goalTarget: 15000.0,
      },
      {
        goalID: 4,
        goalName: "Milestone 4",
        goalTarget: 25000.0,
      },
      {
        goalID: 5,
        goalName: "Milestone 5",
        goalTarget: 50000.0,
      },
      {
        goalID: 6,
        goalName: "Milestone 6",
        goalTarget: 100000.0,
      },
      {
        goalID: 7,
        goalName: "Milestone 7",
        goalTarget: 250000.0,
      },
      {
        goalID: 8,
        goalName: "Milestone 8",
        goalTarget: 500000.0,
      },
      {
        goalID: 100,
        goalName: "New computer",
        goalTarget: 7439.0,
      },
    ],
  },
  {
    accountID: 2134,
    accountName: "John Savings",
    balance: 62543.95,
    goals: [
      {
        goalID: 1,
        goalName: "Milestone 1",
        goalTarget: 5000.0,
      },
      {
        goalID: 2,
        goalName: "Milestone 2",
        goalTarget: 10000.0,
      },
      {
        goalID: 3,
        goalName: "Milestone 3",
        goalTarget: 15000.0,
      },
      {
        goalID: 4,
        goalName: "Milestone 4",
        goalTarget: 25000.0,
      },
      {
        goalID: 5,
        goalName: "Milestone 5",
        goalTarget: 50000.0,
      },
      {
        goalID: 6,
        goalName: "Milestone 6",
        goalTarget: 100000.0,
      },
      {
        goalID: 7,
        goalName: "Milestone 7",
        goalTarget: 250000.0,
      },
      {
        goalID: 8,
        goalName: "Milestone 8",
        goalTarget: 500000.0,
      },
      {
        goalID: 101,
        goalName: "Major holiday",
        goalTarget: 67500.0,
      },
      {
        goalID: 102,
        goalName: "*Washing machine",
        goalTarget: 7916.0,
      },
    ],
  },
  {
    accountID: 4123,
    accountName: "Bob Savings",
    balance: 14582.92,
    goals: [
      {
        goalID: 1,
        goalName: "Milestone 1",
        goalTarget: 5000.0,
      },
      {
        goalID: 2,
        goalName: "Milestone 2",
        goalTarget: 10000.0,
      },
      {
        goalID: 3,
        goalName: "Milestone 3",
        goalTarget: 15000.0,
      },
      {
        goalID: 4,
        goalName: "Milestone 4",
        goalTarget: 25000.0,
      },
      {
        goalID: 5,
        goalName: "Milestone 5",
        goalTarget: 50000.0,
      },
      {
        goalID: 6,
        goalName: "Milestone 6",
        goalTarget: 100000.0,
      },
      {
        goalID: 7,
        goalName: "Milestone 7",
        goalTarget: 250000.0,
      },
      {
        goalID: 8,
        goalName: "Milestone 8",
        goalTarget: 500000.0,
      },
      {
        goalID: 103,
        goalName: "Football trip",
        goalTarget: 18256.0,
      },
    ],
  },
  {
    accountID: 4213,
    accountName: "Richard Savings",
    balance: 625000.0,
    goals: [
      {
        goalID: 1,
        goalName: "Milestone 1",
        goalTarget: 5000.0,
      },
      {
        goalID: 2,
        goalName: "Milestone 2",
        goalTarget: 10000.0,
      },
      {
        goalID: 3,
        goalName: "Milestone 3",
        goalTarget: 15000.0,
      },
      {
        goalID: 4,
        goalName: "Milestone 4",
        goalTarget: 25000.0,
      },
      {
        goalID: 5,
        goalName: "Milestone 5",
        goalTarget: 50000.0,
      },
      {
        goalID: 6,
        goalName: "Milestone 6",
        goalTarget: 100000.0,
      },
      {
        goalID: 7,
        goalName: "Milestone 7",
        goalTarget: 250000.0,
      },
      {
        goalID: 8,
        goalName: "Milestone 8",
        goalTarget: 500000.0,
      },
      {
        goalID: 104,
        goalName: "The million",
        goalTarget: 1000000.0,
      },
    ],
  },
];

export async function GET(request: Request) {
  return NextResponse.json({ accounts: accounts });
}

export async function PUT(request: Request) {
  const { updatedAccounts } = await request.json();

  accounts = updatedAccounts;

  return NextResponse.json({ message: "Accounts updated successfully!" });
}
