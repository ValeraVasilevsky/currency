import type { Currencies, CurrenciesItem } from "./types";

export const LINKS: { title: string; path: string }[] = [
  {
    title: "Главная",
    path: "/",
  },
  {
    title: "Конвертация",
    path: "convert",
  },
];

export const CURRENCIES: CurrenciesItem[] = [
  {
    title: "RUB",
    value: "rub",
  },
  {
    title: "USD",
    value: "usd",
  },
  {
    title: "EUR",
    value: "eur",
  },
];
export const DEFAULT_CURRENCY: Currencies = "rub";
