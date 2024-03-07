from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

import edge_tts


app = FastAPI()


class Request(BaseModel):
    text: str
    voice: str


async def async_tts(text, voice):
    communicate = edge_tts.Communicate(text, voice)
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            yield chunk["data"]


@app.post("/api/tts")
async def text2speech(request: Request):
    return StreamingResponse(
        async_tts(request.text, request.voice),
        media_type='audio/mpeg',
    )
