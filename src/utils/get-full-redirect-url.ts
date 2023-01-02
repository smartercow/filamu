export default function getFullRedirectUrl(redirectPath: string) {
  if (redirectPath.startsWith("http")) return redirectPath;
  const baseUrl = "https://filamu.vercel.app";
  return [baseUrl, redirectPath?.replace(/^\//, "")].filter(Boolean).join("/");
}
