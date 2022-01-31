export interface RequestInterface {
  params: Record<string, string>;
  body: Record<string, string>;
  cookies: Record<string, string>;
}
