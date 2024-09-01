import { api } from "shared/api";

import type { BaseResponse } from "shared/types";
import type { Currency } from "./types";
import type { AxiosError } from "axios";

export const fetchCurrency = async (): Promise<BaseResponse<Currency[]>> => {
  const currencyResponse = await api
    .get("currency")
    .then((response) => ({
      data: response.data,
      status: response.status,
      success: true,
    }))
    .catch((error: AxiosError) => {
      return {
        success: false,
        status: error.response?.status,
        message: error.message,
      };
    });

  return currencyResponse;
};
