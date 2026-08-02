export const BASE_PATH = process.env.NODE_ENV === "production" ? "/chef-website" : "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
