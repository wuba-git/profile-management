import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    if (!request)
      return new Response("Bad Request: Request is null", { status: 400 });

    const data = await request.json();

    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/create_salary_revision`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const responseMsg = await response.json();
    if (response.ok) return NextResponse.json(responseMsg);
    return new Response(JSON.stringify(responseMsg), {
      status: response.status,
    });
  } catch (error) {
    return new Response("Error processing POST of resignation request", {
      status: 500,
    });
  }
}
