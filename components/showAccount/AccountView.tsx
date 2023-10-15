"use client";
import { ShowAccountParams } from "@/types/paramTypes";
import { Progress } from "@/components/ui/progress";
import { UpcomingAndReachedGoals } from "./UpcomingAndReachedGoals";

export default function AccountView({ account }: ShowAccountParams) {
  const nextMilestone = account.goals
    .filter((goal) => goal.goalID < 10)
    .sort((a, b) => a.goalTarget - b.goalTarget)
    .find((goal) => goal.goalTarget > account.balance);

  const nextGoal = account.goals
    .filter((goal) => goal.goalID > 10)
    .sort((a, b) => a.goalTarget - b.goalTarget)
    .find((goal) => goal.goalTarget > account.balance);

  let progressValueMilestone = 60;
  let progressValueGoal = 60;

  if (nextGoal) {
    progressValueGoal = (account.balance / nextGoal.goalTarget) * 100;
  }
  if (nextMilestone) {
    progressValueMilestone = (account.balance / nextMilestone.goalTarget) * 100;
  }

  const remainingGoalsToReach = account.goals.filter(
    (goal) =>
      goal.goalTarget > account.balance &&
      goal.goalID !== nextGoal?.goalID &&
      goal.goalID !== nextMilestone?.goalID
  );

  const reachedGoals = account.goals.filter(
    (goal) =>
      goal.goalTarget <= account.balance &&
      goal.goalID !== nextGoal?.goalID &&
      goal.goalID !== nextMilestone?.goalID
  );

  return (
    <div className="fixed inset-0 bg-red-100 flex flex-col md:flex-row items-center justify-center md:space-x-2 text-[14px] p-7 md:p-0 space-y-2">
      <div className="bg-red-50 h-1/2 lg:w-1/3 xl:w-1/4 md:w-2/5 md:h-3/4 rounded-3xl p-10 flex flex-col space-y-4 overflow-auto">
        <div className="bg-red-100 h-[100px] p-5 rounded-3xl flex flex-col justify-center items-center space-y-4 border-2 border-red-400">
          <p>{account.accountName}</p>
          <p className="font-bold">{account.balance} kr</p>
        </div>
        {nextMilestone && (
          <div className="bg-red-100 h-[70px] p-3 rounded-3xl flex flex-col justify-center items-center border-2 border-red-400 text-[10px]  md:text-[12px]">
            <div className="flex flex-row justify-between w-full">
              <p>{`Next Milestone - ${nextMilestone?.goalTarget} kr`}</p>
              <p>{progressValueMilestone.toFixed(1)}%</p>
            </div>
            <Progress
              value={progressValueMilestone}
              className="bg-red-50 border-2 border-red-400"
            />
          </div>
        )}
        {nextGoal && (
          <div className="bg-red-100 h-[70px] p-3 rounded-3xl flex flex-col justify-center items-center border-2 border-red-400 text-[10px] md:text-[12px]">
            <div className="flex flex-row justify-between w-full">
              <p>{`${nextGoal?.goalName} - ${nextGoal?.goalTarget} kr`}</p>
              <p>{progressValueGoal.toFixed(1)}%</p>
            </div>
            <Progress
              value={progressValueGoal}
              className="bg-red-50 border-2 border-red-400"
            />
          </div>
        )}
      </div>
      <UpcomingAndReachedGoals
        reached={reachedGoals}
        upcoming={remainingGoalsToReach}
        balance={account.balance}
      />
    </div>
  );
}
