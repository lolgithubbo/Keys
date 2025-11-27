export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const uuid = crypto.randomUUID().replace(/-/g, "").substring(0, 6).toUpperCase();
  const code = "Offi-" + uuid;

  return new Response(JSON.stringify({ code }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "Pragma": "no-cache"
    }
  });
  
}
