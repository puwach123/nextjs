import { Receipt, Raw, TxnType } from "types/receipt";

function randStr(length: number): string {
  const seed = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += seed[Math.floor(Math.random() * seed.length)];
  }
  return result;
}

function randType(): TxnType {
  const seed: TxnType[] = [
    "sale",
    "void",
    "settle",
    "adjust",
    "refund",
    "offline",
    "auth",
    "instal",
  ];
  return seed[Math.floor(Math.random() * seed.length)];
}

function randOutlet(): string {
  const seed = genOutlet();
  return seed[Math.floor(Math.random() * seed.length)];
}

function randAddress(): string {
  const seed = genAddress();
  return seed[Math.floor(Math.random() * seed.length)];
}

export function genRaws(total: number): readonly Raw[] {
  const raws: Raw[] = [];
  for (let i = 0; i < total; i++) {
    raws.push({
      id: randStr(12),
      txntime: Number(randStr(13)),
      mid: randStr(12),
      tid: randStr(8),
      batch: randStr(6),
      trace: randStr(6),
      type: randType(),
      outlet: randOutlet(),
      address: randAddress(),
    });
  }
  return raws;
}

export function genRecipts(raws: readonly Raw[]): readonly Receipt[] {
  const receipts: Receipt[] = [];
  for (let i = 0; i < raws.length; i++) {
    const clone: Raw = { ...raws[i] };
    delete clone.outlet;
    delete clone.address;
    receipts.push(clone);
  }
  return receipts;
}

export function genOutlet(): readonly string[] {
  return [
    "FREE HK - MK",
    "FREE HK - TW",
    "FREE HK - TC",
    "FREE HK - TY",
    "FREE HK - WC",
    "FREE HK - TKO",
  ];
}

export function genAddress(): readonly string[] {
  return [
    "TUSEN WAN",
    "MONK KOK",
    "TUNG CHUNG",
    "TSANG YI",
    "WAN CHAI",
    "TSEUNG KWAN O",
  ];
}

const raws = genRaws(30);
const recepipts = genRecipts(raws);
const outlets = genOutlet();
const addresses = genAddress();

export default Object.freeze({
  raws: raws,
  receipts: recepipts,
  outlets: outlets,
  addresses: addresses,
});
