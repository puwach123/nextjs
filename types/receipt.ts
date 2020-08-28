export type TxnType =
  | "sale"
  | "settle"
  | "void"
  | "adjust"
  | "instal"
  | "auth"
  | "refund"
  | "offline";

export type Raw = {
  id: string;
  outlet: string;
  address: string;
  mid: string;
  tid: string;
  batch: string;
  trace: string;
  txntime: number;
  type: TxnType;
};

export type Receipt = Omit<Raw, "address" | "outlet">;

export type SearchValue = {
  outlet: string;
  address: string;
  mid: string;
  tid: string;
  batch: string;
  trace: string;
  from: string;
  to: string;
  type: TxnType | "";
};

export type SearchOption = {
  limit: number;
  skip: number;
};

export type Query = SearchValue & SearchOption;
