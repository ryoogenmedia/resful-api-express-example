export enum Roles {
  SUPERADMIN = "superadmin",
  ADMIN = "admin",
  USER = "user",
}

export enum ErrorCodes {
  UNAUTHENTICATED = 401,
  UNAUTHORIZED = 403,
  PAGE_EXPIRED = 419,
  VALIDATION_ERROR = 400,
  SERVER_ERROR = 500,
}

export const PORT: number = Number(process.env.LISTENING_PORT) ?? 3000;
export const NAME_APP: string = String(process.env.NAME_APP) ?? "Ryoogen Media";
