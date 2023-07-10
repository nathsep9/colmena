import { useMemo } from "react";
import { SaleByRegion } from "models";

export const useLimits = ({ dataRaw }: { dataRaw: SaleByRegion[] }) => {
  const minDate = useMemo(
    () =>
      new Date(
        Math.min(
          ...dataRaw.map((item) =>
            Math.min(...item.data.map((item) => +item.month))
          )
        )
      ),
    [dataRaw]
  );

  const maxDate = useMemo(
    () =>
      new Date(
        Math.max(
          ...dataRaw.map((item) =>
            Math.max(...item.data.map((item) => +item.month))
          )
        )
      ),
    [dataRaw]
  );
  return {
    minDate,
    maxDate,
  };
};

export default useLimits;
