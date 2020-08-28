import { Query, Receipt } from "types/receipt";
import { RcptSvc } from "types/svcstore";

import fake from "mock/data/fake";

class MockRcptSvc implements RcptSvc {
  saveReceipt(receiptId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  previewReceipt(receiptId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getReceipts({
    outlet,
    address,
    mid,
    tid,
    batch,
    trace,
    from,
    to,
    type,
    limit,
    skip,
  }: Query): Promise<{ total: number; receipts: Receipt[] }> {
    return new Promise<{ total: number; receipts: Receipt[] }>(
      (resolve, reject) => {
        setTimeout(() => {
          let raws = fake.raws.map((raw) => ({ ...raw }));

          if (outlet) raws = raws.filter((raw) => raw.outlet === outlet);
          if (address) raws = raws.filter((raw) => raw.address === address);

          if (tid) raws = raws.filter((raw) => raw.tid === tid);
          if (mid) raws = raws.filter((raw) => raw.mid === mid);
          if (batch) raws = raws.filter((raw) => raw.batch === batch);
          if (trace) raws = raws.filter((raw) => raw.trace === trace);
          if (type) raws = raws.filter((raw) => raw.type === type);

          if (from) raws = raws.filter((raw) => raw.txntime >= Number(from));
          if (to) raws = raws.filter((raw) => raw.txntime <= Number(from));

          for (let i = 0; i < raws.length; i++) {
            delete raws[i].address;
            delete raws[i].outlet;
          }

          const total = raws.length;

          raws.sort((a, b) => b.txntime - a.txntime);

          raws = raws.slice(skip * limit, skip * limit + limit);

          resolve({ total: total, receipts: raws });
        }, 500);
      }
    );
  }
}

export default MockRcptSvc;
