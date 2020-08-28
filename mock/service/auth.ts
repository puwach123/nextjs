import jwt from "jsonwebtoken";

import { User, Role, Permission } from "types/auth";
import { AuthSvc, RoleSvc, PermSvc, UserSvc } from "types/svcstore";
import { SearchOption } from "types/receipt";

import { users } from "mock/data/user";

class MockAuthSvc implements AuthSvc {
  private JWT_SECRET: string = "jwtsecret";
  login(
    name: string,
    pw: string
  ): Promise<{ token: string; user: Pick<User, "name" | "role"> }> {
    return new Promise((resolve, rejects) =>
      setTimeout(async () => {
        try {
          const user = users.find((user) => user.name === name);
          if (!user) throw new Error("user not found");

          const valid = user.pw === pw;
          if (!valid) throw new Error("invalid password");

          const payload = { id: user.id, name: user.name, role: user.role };
          const options = { expiresIn: 3600 };
          const token = jwt.sign(payload, this.JWT_SECRET, options);

          resolve({
            token: token,
            user: { name: user.name, role: user.role },
          });
        } catch (error) {
          rejects(error);
        }
      }, 500)
    );
  }
  logout(name: string): Promise<void> {
    return new Promise((resolve, rejects) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
  }
}

class MockRoleSvc implements RoleSvc {
  saveRole(role: Role): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getRoles(options?: SearchOption): Promise<Role[]> {
    throw new Error("Method not implemented.");
  }
  getRoleById(roleId: string): Promise<Role> {
    throw new Error("Method not implemented.");
  }
  updateRole(roleId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delRoleById(roleId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delRoles(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

class MockPermSvc implements PermSvc {
  savePerm(perm: Permission): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getPerms(options?: SearchOption): Promise<Permission[]> {
    throw new Error("Method not implemented.");
  }
  getPermById(permId: string): Promise<Permission> {
    throw new Error("Method not implemented.");
  }
  updatePerm(permId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delPermById(permId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delPerms(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

class MockUserSvc implements UserSvc {
  saveUser(perm: Permission): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getUsers(options?: SearchOption): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  getUserById(userId: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  updateUser(userId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delUserById(userId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delUsers(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { MockAuthSvc, MockRoleSvc, MockPermSvc, MockUserSvc };
