import { Role } from "types/auth";

export const ADMIN: Role = {
  id: "0000001",
  role: "admin",
  permssions: [
    "rcpt.find",
    "rcpt.edit",
    "rcpt.delete",
    "rcpt.save",
    "rcpt.web",
    "report.find",
    "report.edit",
    "report.delete",
    "report.save",
    "report.web",
    "rbac.find",
    "rbac.edit",
    "rbac.delete",
    "rbac.save",
    "rbac.web",
    "acct.find",
    "acct.edit",
    "acct.delete",
    "acct.save",
    "acct.web",
  ],
};

export const USER: Role = {
  id: "0000002",
  role: "user",
  permssions: [
    "rcpt.find",
    "rcpt.web",
    "rcpt.save",
    "report.find",
    "report.web",
    "report.save",
  ],
};
