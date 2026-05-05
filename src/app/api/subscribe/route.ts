import { NextResponse } from "next/server";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/contacts";

export async function POST(request: Request) {
  const { email } = (await request.json().catch(() => ({}))) as { email?: string };

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isFinite(listId)) {
    return NextResponse.json(
      { error: "Newsletter provider is not configured" },
      { status: 501 },
    );
  }

  const response = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Subscription failed" }, { status: response.status });
  }

  return NextResponse.json({ ok: true });
}
