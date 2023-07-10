export interface SalesDatum {
  x: Date;
  y: number;
}

export interface DataItem {
  id: string;
  data: SalesDatum[];
}
