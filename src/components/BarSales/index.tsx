import { ResponsiveLine } from "@nivo/line";
import { useState } from "react";
import format from "date-fns/format";

import { SaleByRegion } from "models";
import { Filters, Tooltip } from "./components";
import { OperatorFilters } from "./constants";
import useData from "./hooks/useData";

export const BarSales = ({ data: dataRaw }: { data: SaleByRegion[] }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [quantityOperator, setQuantityOperator] =
    useState<OperatorFilters | null>(null);

  const { data } = useData({
    dataRaw,
    startDate,
    endDate,
    quantity,
    quantityOperator,
  });
  return (
    <div style={{ height: "300px" }}>
      <Filters
        dataRaw={dataRaw}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        quantity={quantity}
        setQuantity={setQuantity}
        quantityOperator={quantityOperator}
        setQuantityRule={setQuantityOperator}
      />

      <ResponsiveLine
        data={data}
        isInteractive
        useMesh
        enableArea
        curve="monotoneX"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        colors={{ scheme: "nivo" }}
        axisBottom={{
          legend: "Fechas",
          legendOffset: 36,
          legendPosition: "middle",
          format: (x: Date) => format(x, `MMM - yyyy`),
        }}
        axisLeft={{
          legend: "Ventas",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        tooltip={({ point }) => <Tooltip point={point} />}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default BarSales;
