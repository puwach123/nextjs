export const ROLE = {
  ADMIN: "admin",
  USER: "user",
} as const;

export const PERM = {
  READ_RCPT: "rcpt.find",
  EDIT_RCPT: "rcpt.edit",
  DELETE_RCPT: "rcpt.delete",
  SAVE_RCPT: "rcpt.save",
  WEB_RCPT: "rcpt.web",

  READ_REPORT: "report.find",
  EDIT_REPORT: "report.edit",
  DELETE_REPORT: "report.delete",
  SAVE_REPORT: "report.save",
  WEB_REPORT: "report.web",

  READ_RBAC: "rbac.find",
  EDIT_RBAC: "rbac.edit",
  DELETE_RBAC: "rbac.delete",
  SAVE_RBAC: "rbac.save",
  WEB_RBAC: "rbac.web",

  READ_ACCT: "acct.find",
  EDIT_ACCT: "acct.edit",
  DELETE_ACCT: "acct.delete",
  SAVE_ACCT: "acct.save",
  WEB_ACCT: "acct.web",
} as const;
