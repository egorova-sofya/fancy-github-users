export function getPlural(count: number): "zero" | "one" | "few" | "many" {
  if (count === 0) {
    return "zero";
  }

  const divisionLastNumber = count % 10;
  const divisionLastNumbers = count % 100;

  if (divisionLastNumber === 1 && divisionLastNumbers !== 11) {
    return "one";
  }

  if (
    divisionLastNumber > 1 &&
    divisionLastNumbers < 5 &&
    (divisionLastNumbers < 10 || divisionLastNumbers > 20)
  ) {
    return "few";
  }

  return "many";
}
