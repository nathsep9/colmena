export interface SaleByRegion {
  region: string;
  data: {
    month: Date;
    quantity: number;
  }[];
}

export interface SaleByRegionService {
  region: string;
  data: {
    month: string;
    quantity: number;
  }[];
}

export interface UserRegisterByMonth {
  month: string;
  total: number;
}

export interface DataItem {
  sales: SaleByRegion[];
  usersRegisterByMonth: UserRegisterByMonth[];
}
