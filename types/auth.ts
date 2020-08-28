export type User = {
  id: string;
  name: string;
  pw: string;
  role: string;
};

export type Role = {
  id: string;
  role: string;
  permssions: string[];
};

export type Permission = {
  id: string;
  perm: string;
  action: Action;
  target: Target;
};

export type JWT = {
  token: string;
  user: Pick<User, "name" | "role">;
};

export type Action = "save" | "find" | "edit" | "delete" | "web";

export type Target = "receipt" | "report" | "rbac" | "account";
