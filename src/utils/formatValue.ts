export const formatValue = (n: number) => {
  const dividedN = n / 100;
  const result = dividedN.toFixed(2).replace('.', ',');

  return result;
}