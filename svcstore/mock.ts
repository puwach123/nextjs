import type { GlobalSvcStore } from "types/svcstore";

import MockRcptSvc from "mock/service/receipt";
import MockAcctSvc from "mock/service/account";
import {
  MockAuthSvc,
  MockRoleSvc,
  MockPermSvc,
  MockUserSvc,
} from "mock/service/auth";

const mock: GlobalSvcStore = {
  rcptsvc: new MockRcptSvc(),
  acctsvc: new MockAcctSvc(),
  authsvc: new MockAuthSvc(),
  rolesvc: new MockRoleSvc(),
  permsvc: new MockPermSvc(),
  usersvc: new MockUserSvc(),
};

export default mock;
