import { Permission } from "types/auth";

/* BEING RCPT */
export const FIND_RCPT: Permission = {
  id: "000001",
  perm: "rcpt.find",
  action: "find",
  target: "receipt",
};
export const EDIT_RCPT: Permission = {
  id: "000002",
  perm: "rcpt.edit",
  action: "edit",
  target: "receipt",
};
export const DELETE_RCPT: Permission = {
  id: "000003",
  perm: "rcpt.delete",
  action: "delete",
  target: "receipt",
};
export const SAVE_RCPT: Permission = {
  id: "000004",
  perm: "rcpt.save",
  action: "save",
  target: "receipt",
};
export const WEB_RCPT: Permission = {
  id: "000005",
  perm: "rcpt.web",
  action: "web",
  target: "receipt",
};
/* END RCPT */

/* BEING REPORT */
export const FIND_REPORT: Permission = {
  id: "000006",
  perm: "report.find",
  action: "find",
  target: "receipt",
};
export const EDIT_REPORT: Permission = {
  id: "000007",
  perm: "report.edit",
  action: "edit",
  target: "receipt",
};
export const DELETE_REPORT: Permission = {
  id: "000008",
  perm: "report.delete",
  action: "delete",
  target: "receipt",
};
export const SAVE_REPORT: Permission = {
  id: "000009",
  perm: "report.save",
  action: "save",
  target: "receipt",
};
export const WEB_REPORT: Permission = {
  id: "000010",
  perm: "report.web",
  action: "web",
  target: "receipt",
};
/* END REPORT */

/* BEING RBAC */
export const FIND_RBAC: Permission = {
  id: "000011",
  perm: "rbac.find",
  action: "find",
  target: "rbac",
};
export const EDIT_RBAC: Permission = {
  id: "000012",
  perm: "rbac.edit",
  action: "edit",
  target: "rbac",
};
export const DELETE_RBAC: Permission = {
  id: "000013",
  perm: "rbac.delete",
  action: "delete",
  target: "rbac",
};
export const SAVE_RBAC: Permission = {
  id: "000014",
  perm: "rbac.save",
  action: "save",
  target: "rbac",
};
export const WEB_RBAC: Permission = {
  id: "000015",
  perm: "rbac.web",
  action: "web",
  target: "rbac",
};
/* END RBAC */

/* BEING ACCT */
export const FIND_ACCOUNT: Permission = {
  id: "000016",
  perm: "acct.find",
  action: "find",
  target: "account",
};
export const EDIT_ACCOUNT: Permission = {
  id: "000017",
  perm: "acct.edit",
  action: "edit",
  target: "account",
};
export const DELETE_ACCOUNT: Permission = {
  id: "000018",
  perm: "acct.delete",
  action: "delete",
  target: "account",
};
export const SAVE_ACCOUNT: Permission = {
  id: "000019",
  perm: "acct.save",
  action: "save",
  target: "account",
};
export const WEB_ACCOUNT: Permission = {
  id: "000020",
  perm: "acct.web",
  action: "web",
  target: "account",
};
/* END ACCT */
