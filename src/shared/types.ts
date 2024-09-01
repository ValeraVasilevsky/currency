export interface BaseResponse<T> {
  success: boolean;
  data?: T;
  status?: number;
  message?: string;
}

export type Currencies = "rub" | "usd" | "eur";
export interface CurrenciesItem {
  title: string;
  value: Currencies;
}
