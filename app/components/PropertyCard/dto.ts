export interface Property {
  id: number;
  name: string;
  year: number;
  type: string;
  image: string;
  parcel_boundaries: string;
  county: {
    code: string;
    name: string;
  };
  owner: {
    name: string;
    phone: string;
  };
  tax_bill: number;
  market_land_value: number;
  market_land_total: number;
  mortgage: {
    buyer: string;
    seller: string;
    value: number;
    date: string;
  }[];
  address: {
    id: number;
    city: string;
    state: string;
    street: string;
    zipcode: string;
  };
  view: boolean;
}
