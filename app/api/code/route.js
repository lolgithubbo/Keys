export async function GET() {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  
  return new Response(JSON.stringify({ code }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
