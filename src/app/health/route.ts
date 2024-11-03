export async function GET() {
  return new Response(
    JSON.stringify({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'
    }), 
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
} 