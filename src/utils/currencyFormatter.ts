export const currencyFormatter = ({
  value,
  locale = "pt-BR",
  currency = "BRL",
}: {
  value: string;
  locale?: string;
  currency?: string;
}) => {
  const setCurrency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  return setCurrency.format(Number(value));
};
