import { User } from "@prisma/client";

export type UserResponse = {
  id: number;
  username: string;
  name: string;
  token?: string;
  roles: string;
};

export function toUserResponse(user: User): UserResponse {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    token: user.token!,
    roles: user.roles,
  };
}
