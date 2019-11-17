export const dateStringToDate = (dateString: string): Date => {
  const DAY = 0;
  const MONTH = 1;
  const YEAR = 2;

  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[YEAR], dateParts[MONTH] - 1, dateParts[DAY]);
};
