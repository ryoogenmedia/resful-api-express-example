import { User } from "@prisma/client";

export type UserResponse = {
  id: string;
  username: string;
  name: string;
  token?: string;
  roles: string;
  created_at: Date;
  updated_at: Date;
};

export function toUserResponse(user: User): UserResponse {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    token: user.token!,
    roles: user.roles,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
}
