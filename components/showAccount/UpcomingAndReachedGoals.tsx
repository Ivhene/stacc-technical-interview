import { UpcomingAndReachedParams } from "@/types/paramTypes";
import { Progress } from "../ui/progress";

export function UpcomingAndReachedGoals({
  upcoming,
  reached,
  balance,
}: UpcomingAndReachedParams) {
  const upcomingDisplay = () =>
    upcoming
      .sort((a, b) => a.goalTarget - b.goalTarget)
      .map((goal) => {
        const progressValue = (balance / goal.goalTarget) * 100;
        return (
          <div
            key={goal.goalID}
            className="bg-amber-100 h-[70px] p-3 rounded-3xl flex flex-col justify-center items-center border-2 border-amber-400  text-[10px] md:text-[12px]"
          >
            <div className="flex flex-row justify-between w-full">
              <p>{`${goal.goalName} - ${goal.goalTarget} kr`}</p>
              <p>{progressValue.toFixed(1)}%</p>
            </div>
            <Progress
              value={progressValue}
              className="bg-amber-50 border-2 border-amber-400"
            />
          </div>
        );
      });

  const reachedDisplay = () =>
    reached
      .sort((a, b) => a.goalTarget - b.goalTarget)
      .map((goal) => {
        const progressValue = (balance / goal.goalTarget) * 100;
        return (
          <div
            key={goal.goalID}
            className="bg-amber-100 h-[70px] p-3 rounded-3xl flex flex-col justify-center items-center border-2 border-amber-400  text-[10px] md:text-[12px]"
          >
            <div className="flex flex-row justify-between w-full">
              <p>{`${goal.goalName} - ${goal.goalTarget} kr`}</p>
              <p>{`${
                progressValue < 100
                  ? progressValue.toFixed(1) + "%"
                  : "Completed"
              }`}</p>
            </div>
            <Progress
              value={progressValue}
              className="bg-amber-50 border-2 border-amber-400"
            />
          </div>
        );
      });

  return (
    <div className="bg-amber-50 h-1/2 xl:w-1/4 lg:w-1/3 md:w-2/5 md:h-3/4 rounded-3xl p-10 flex flex-col space-y-4 overflow-auto">
      {upcomingDisplay()}
      {reachedDisplay()}
    </div>
  );
}
