import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(): Promise<NextResponse> {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    return new NextResponse(
      JSON.stringify({ active: false, text: "API Key not configured" }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  }

  try {
    const base64Key = btoa(apiKey);

    const response = await fetch("https://wakatime.com/api/v1/users/current/heartbeats", {
      headers: {
        Authorization: `Basic ${base64Key}`,
      },
    });

    if (!response.ok) {
      return new NextResponse(
        JSON.stringify({ active: false, text: "WakaTime API error" }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    }

    const json = await response.json();
    const heartbeats = json.data || [];

    if (heartbeats.length === 0) {
      return new NextResponse(
        JSON.stringify({ active: false, text: "No activity found" }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    }

    const latestHeartbeat = heartbeats[heartbeats.length - 1];
    const heartbeatTime = latestHeartbeat.time * 1000;
    const diffInMinutes = (Date.now() - heartbeatTime) / 60000;

    const isCoding = diffInMinutes <= 15;

    return new NextResponse(
      JSON.stringify({
        active: isCoding,
        project: isCoding ? latestHeartbeat.project : null,
        language: isCoding ? latestHeartbeat.language : null,
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ active: false, error: "Internal server error" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}