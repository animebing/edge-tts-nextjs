# Edge TTS Nextjs App

Web application using [edge-tts](https://github.com/rany2/edge-tts) and nextjs

## Introduction

This project consists of two parts👇

1. `web`: nextjs web app
2. `backend`: edge-tts fastapi service

## Local Development

### Clone project
```shell
git clone https://github.com/animebing/edge-tts-nextjs
cd edge-tts-nextjs
```

### Nextjs Web App, in `web` directory

1. locate a `.env` file with content below
```
EDGE_TTS_URL="http://127.0.0.1:8000/api/tts"
```
2. install dependencies
```shell
npm install
```
3. start web server
```shell
npm run dev
```

### Edge-tts Fastapi Service, in `backend` directory

1. install dependencies
```shell
pip install -r requirements.txt
```

2. start fastapi service
```shell
uvicorn main:app
```

## Dependency
- [Edge-tts](https://github.com/rany2/edge-tts)
- [Nextjs](https://nextjs.org/)
- [Fastapi]()https://fastapi.tiangolo.com/
