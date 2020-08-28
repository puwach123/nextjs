import fake from "mock/data/fake";

import { AcctSvc } from "types/svcstore";

class MockAcctSvc implements AcctSvc {
  addRoleToUser(user: string, role: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delRoleFromUser(user: string, role: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAddresses(): Promise<string[]> {
    return new Promise<string[]>((resolve, rejects) => {
      setTimeout(() => {
        resolve([...fake.addresses]);
      }, 500);
    });
  }

  getOutlets(): Promise<string[]> {
    return new Promise<string[]>((resolve, rejects) => {
      setTimeout(() => {
        resolve([...fake.outlets]);
      }, 500);
    });
  }
}

export default MockAcctSvc;
