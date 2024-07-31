import { Role } from "../types/user.interface";

export const isAdmin = (role?: Role): boolean => {
  return role === Role.ADMIN;
};