# Kuma Labs Demo Hub — Local Development

This guide covers running the Kuma demo hub (voice-to-JSON demos at `/demos`) locally against the Kuma FastAPI backend.

## Prerequisites

- Node.js 18+ with pnpm
- Python environment with `uv` (for the backend)
- The `kuma-labs` monorepo cloned at `~/Projects/kuma-labs`

## Setup

### 1. Environment variables

Copy the example file and adjust if needed:

```bash
cp .env.local.example .env.local
```

Default values in `.env.local`:

```
NEXT_PUBLIC_KUMA_API_URL=http://localhost:8000
NEXT_PUBLIC_KUMA_SANDBOX_KEY=kuma_test_DEMO_PUBLIC
```

The sandbox key triggers fixture-replay on the backend: no real ASR is invoked, the backend returns a canned response (e.g., `{type: CANCEL_TRANSFER, recipient: Ousmane, ...}` for the remittance-dispatch demo).

### 2. Run the backend

```bash
cd ~/Projects/kuma-labs
uv run --package kuma-api uvicorn api.main:app --reload --port 8000
```

The backend should be reachable at `http://localhost:8000`.

### 3. Run the frontend

```bash
cd ~/Projects/kuma-labs-core
npm run dev
```

### 4. Open the demos

Visit `http://localhost:3000/demos` and navigate to a demo (e.g., `http://localhost:3000/demos/remittance-dispatch`).

### 5. Test the recorder

1. Tap the mic button and grant microphone permission.
2. Record 2 seconds of audio, then release.
3. The recorder cycles through: `uploading` -> `transcribing` -> `extracting-intent` -> `success`.
4. The JSON viewer should populate with the fixture response.

### 6. Test the error path

Stop the backend (`Ctrl+C` on the uvicorn process), then record again. Within ~1 second the recorder should display a red error ring and the "Couldn't transcribe..." message — not a stuck spinner.

## Production ops dependency

The deployed frontend at `kuma-labs.com` hits `https://api.kuma-labs.com`. The Phase 08 demo routes (`POST /v1/demo/{slug}`) must be deployed to Cloud Run before the production frontend will work end-to-end. This is an ops task — local development with `NEXT_PUBLIC_KUMA_API_URL=http://localhost:8000` is fully functional independently of the production deployment status.
