import { Point } from "@nivo/line";
import format from "date-fns/format";

export const Tooltip = ({ point }: { point: Point }) => (
  <div
    style={{
      background: "white",
      padding: "9px 12px",
      borderRadius: "3px",
    }}
  >
    <div>
      <strong>Región: </strong>
      {point.serieId}
    </div>
    <div>
      <strong>Fecha: </strong>
      {point.data.x instanceof Date ? format(point.data.x, `MMM - yyyy`) : "-"}
    </div>
    <div>
      <strong>Ventas: </strong>
      {point.data.y.toString()}
    </div>
  </div>
);
