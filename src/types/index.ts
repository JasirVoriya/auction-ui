export interface Category {
  name: string;
  link: string;
  children: Category[];
}
export interface BidRecord{
  bidder: string;
  price: number;
  time: string;
}
export interface Goods {
  title: string;
  price: number;
  status: string;
  cover: string;
  url: string;
  info: {
    assetType: string;
    company: string;
    view: number;
    registration: number;
    startingPrice: number;
    commission: number;
    increment: number;
    deposit: number;
    extensionPeriod: number;
    bidRecord: BidRecord[];
  };
  time: string;
}
