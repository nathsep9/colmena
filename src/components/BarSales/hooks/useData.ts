import { useMemo } from "react";

import { SaleByRegion } from "models";
import { DataItem, SalesDatum } from "../types";
import { OperatorFilters } from "../constants";

const filterByQuantity = (
  quantity: number,
  quantityOperator: OperatorFilters,
  datum: SalesDatum
) => {
  switch (quantityOperator) {
    case OperatorFilters.EQUAL:
      if (quantity !== datum.y) return false;
      break;
    case OperatorFilters.NOT_EQUAL:
      if (quantity === datum.y) return false;
      break;
    case OperatorFilters.GREATER_THAN:
      if (quantity >= datum.y) return false;
      break;
    case OperatorFilters.GREATER_THAN_OR_EQUAL:
      if (quantity > datum.y) return false;
      break;
    case OperatorFilters.LESS_THAN:
      if (quantity <= datum.y) return false;
      break;
    case OperatorFilters.LESS_THAN_OR_EQUAL:
      if (quantity < datum.y) return false;
      break;
    default:
      break;
  }
  return true;
};

export const useData = ({
  dataRaw,
  endDate,
  startDate,
  quantity,
  quantityOperator,
}: {
  startDate: Date | null;
  endDate: Date | null;
  dataRaw: SaleByRegion[];
  quantity: number | null;
  quantityOperator: OperatorFilters | null;
}) => {
  const data = useMemo(
    () =>
      dataRaw.map((item): DataItem => {
        const datums = item.data.map((item) => ({
          x: item.month,
          y: item.quantity,
        }));
        return {
          id: item.region,
          data: datums.filter((datum) => {
            if (startDate && +startDate > +datum.x) return false;
            if (endDate && +endDate < +datum.x) return false;
            if (quantity && quantityOperator) {
              if (!filterByQuantity(quantity, quantityOperator, datum))
                return false;
            }

            return true;
          }),
        };
      }),
    [dataRaw, endDate, quantity, quantityOperator, startDate]
  );

  return {
    data,
  };
};

export default useData;
