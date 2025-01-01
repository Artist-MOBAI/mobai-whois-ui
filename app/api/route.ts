export async function GET(request: Request) {
  const { default: whois } = await import("whois-json");

  const url = new URL(request.url);
  const params = url.searchParams;
  const domain = params.get("domain");

  const results = await whois(domain ?? "");
  return new Response(JSON.stringify(results, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
