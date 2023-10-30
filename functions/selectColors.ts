export function selectColors(balance: number) {
  let backgroundLight: string;
  let backgroundNeutral: string;
  let backgroundStrong: string;
  let border: string;

  switch (true) {
    case balance < 5000:
      backgroundNeutral = "bg-[#FFDFDF]";
      backgroundLight = "bg-[#FFEFEF]";
      backgroundStrong = "bg-[#FF7E7E]";
      border = "bg-[#FF7E7E]";
      break;
    case balance < 10000:
      backgroundNeutral = "bg-[#FFE9D6]";
      backgroundLight = "bg-[#FCF5F0]";
      backgroundStrong = "bg-[#FFB571]";
      border = "bg-[#FF7E7E]";
      break;
    case balance < 15000:
      backgroundNeutral = "bg-[#FFF7B0]";
      backgroundLight = "bg-[#FEF8E5]";
      backgroundStrong = "bg-[#FFEE57]";
      border = "bg-[#FF7E7E]";
      break;
    case balance < 25000:
      backgroundNeutral = "bg-[#EDFFC5]";
      backgroundLight = "bg-[#F9FFED]";
      backgroundStrong = "bg-[#D8FF6A]";
      border = "bg-[#FF7E7E]";
      break;
    case balance < 50000:
      backgroundNeutral = "bg-[#E2FFDB]";
      backgroundLight = "bg-[#EDFEE5]";
      backgroundStrong = "bg-[#9EFF7C]";
      border = "bg-[#FF7E7E]";
      break;
    case balance < 100000:
      backgroundNeutral = "bg-[#D6FFFF]";
      backgroundLight = "bg-[#EEFFFB]";
      backgroundStrong = "bg-[#91FFF2]";
      border = "bg-[#FF7E7E]";
      break;
    case balance < 250000:
      backgroundNeutral = "bg-[#D7FFE9]";
      backgroundLight = "bg-[#E9FFF0]";
      backgroundStrong = "bg-[#99FFCE]";
      border = "bg-[#FF7E7E]";
      break;
    case balance < 500000:
      backgroundNeutral = "bg-[#DBEAFF]";
      backgroundLight = "bg-[#EEF6FF]";
      backgroundStrong = "bg-[#A0D2FF]";
      border = "bg-[#FF7E7E]";
      break;
    default:
      backgroundNeutral = "bg-[#F6DBFD]";
      backgroundLight = "bg-[#FFF2FE]";
      backgroundStrong = "bg-[#D7A5FF]";
      border = "bg-[#FF7E7E]";
      break;
  }

  return { backgroundNeutral, backgroundLight, backgroundStrong, border };
}
