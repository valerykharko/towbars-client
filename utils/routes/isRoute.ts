import { adminRoutes, publicRoutes } from "utils/routes/routes";

export function isPublicRoute(pathname: string) {
  return publicRoutes.find((item) => item === pathname);
}

export function isAdminRoute(pathname: string) {
  return adminRoutes.find((item) => item === pathname);
}
