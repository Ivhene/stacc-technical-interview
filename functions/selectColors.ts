export function selectColors(balance: number) {
  let bodyAndBox: string;
  let contentAndCosmetic: string;
  let borderAndCosmetic: string;

  switch (true) {
    case balance < 5000:
      bodyAndBox = "#FFDFDF";
      contentAndCosmetic = "#FFEFEF";
      borderAndCosmetic = "#FF7E7E";
      break;
    case balance < 10000:
      bodyAndBox = "#FFE9D6";
      contentAndCosmetic = "#FCF5F0";
      borderAndCosmetic = "#FFB571";
      break;
    case balance < 15000:
      bodyAndBox = "#FFF7B0";
      contentAndCosmetic = "#FEF8E5";
      borderAndCosmetic = "#FFEE57";
      break;
    case balance < 25000:
      bodyAndBox = "#EDFFC5";
      contentAndCosmetic = "#F9FFED";
      borderAndCosmetic = "#D8FF6A";
      break;
    case balance < 50000:
      bodyAndBox = "#E2FFDB";
      contentAndCosmetic = "#EDFEE5";
      borderAndCosmetic = "#9EFF7C";
      break;
    case balance < 100000:
      bodyAndBox = "#D6FFFF";
      contentAndCosmetic = "#EEFFFB";
      borderAndCosmetic = "#91FFF2";
      break;
    case balance < 250000:
      bodyAndBox = "#D7FFE9";
      contentAndCosmetic = "#E9FFF0";
      borderAndCosmetic = "#99FFCE";
      break;
    case balance < 500000:
      bodyAndBox = "#DBEAFF";
      contentAndCosmetic = "#EEF6FF";
      borderAndCosmetic = "#A0D2FF";
      break;
    default:
      bodyAndBox = "#F6DBFD";
      contentAndCosmetic = "#FFF2FE";
      borderAndCosmetic = "#D7A5FF";
      break;
  }
}
