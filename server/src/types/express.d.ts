
export interface UserPayload {
  id: number;
  username: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload;
  }
}
