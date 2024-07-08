export type User = {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  roleId: number;
};

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
