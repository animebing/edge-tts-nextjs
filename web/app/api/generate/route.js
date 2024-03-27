export async function POST(request) {
  const requestBody = await request.json();
  const response = await fetch(process.env.EDGE_TTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
  
  if (!response.ok) {
    throw new Error("tts-edge failed");
  }

  return response;
}
