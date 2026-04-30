import type { DemoSlug } from "./shapes";

export interface DemoResponse {
  raw_transcript: string;
  structured_intent: Record<string, unknown>;
  confidence: number;
}

const API =
  process.env.NEXT_PUBLIC_KUMA_API_URL || "https://api.kuma-labs.com";
const KEY =
  process.env.NEXT_PUBLIC_KUMA_SANDBOX_KEY || "kuma_test_DEMO_PUBLIC";

export async function uploadAudio({
  slug,
  blob,
}: {
  slug: DemoSlug;
  blob: Blob;
}): Promise<DemoResponse> {
  const fd = new FormData();
  fd.append("audio", blob, `recording.${blob.type.split("/")[1] || "webm"}`);
  const res = await fetch(`${API}/v1/demo/${slug}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}` },
    body: fd,
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json() as Promise<DemoResponse>;
}

export async function uploadFixture({
  slug,
  fixtureId = "default",
}: {
  slug: DemoSlug;
  fixtureId?: string;
}): Promise<DemoResponse> {
  const fd = new FormData();
  fd.append("fixture_id", fixtureId);
  const res = await fetch(`${API}/v1/demo/${slug}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}` },
    body: fd,
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json() as Promise<DemoResponse>;
}
