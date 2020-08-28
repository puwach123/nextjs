import { Query, Receipt, SearchOption } from "./receipt";
import { User, Role, Permission } from "./auth";

export type RcptSvc = {
  getReceipts(query: Query): Promise<{ total: number; receipts: Receipt[] }>;
  saveReceipt(receiptId: string): Promise<void>;
  previewReceipt(receiptId: string): Promise<void>;
};

export type AuthSvc = {
  login(
    name: string,
    pw: string
  ): Promise<{ token: string; user: Pick<User, "name" | "role"> }>;
  logout(name: string): Promise<void>;
};

export type RoleSvc = {
  saveRole(role: Role): Promise<void>;
  getRoles(options?: SearchOption): Promise<Role[]>;
  getRoleById(roleId: string): Promise<Role>;
  updateRole(roleId: string): Promise<void>;
  delRoleById(roleId: string): Promise<void>;
  delRoles(): Promise<void>;
};

export type PermSvc = {
  savePerm(perm: Permission): Promise<void>;
  getPerms(options?: SearchOption): Promise<Permission[]>;
  getPermById(permId: string): Promise<Permission>;
  updatePerm(permId: string): Promise<void>;
  delPermById(permId: string): Promise<void>;
  delPerms(): Promise<void>;
};

export type UserSvc = {
  saveUser(perm: Permission): Promise<void>;
  getUsers(options?: SearchOption): Promise<User[]>;
  getUserById(userId: string): Promise<User>;
  updateUser(userId: string): Promise<void>;
  delUserById(userId: string): Promise<void>;
  delUsers(): Promise<void>;
};

export type AcctSvc = {
  getAddresses(acctId?: string): Promise<string[]>;
  getOutlets(acctId?: string): Promise<string[]>;
  addRoleToUser(user: string, role: string): Promise<void>;
  delRoleFromUser(user: string, role: string): Promise<void>;
};

export type GlobalSvcStore = {
  rcptsvc: RcptSvc;
  acctsvc: AcctSvc;
  authsvc: AuthSvc;
  rolesvc: RoleSvc;
  permsvc: PermSvc;
  usersvc: UserSvc;
};
