import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/api/v1/reference_table/single_reference_table/ref_leave_of_absence`,
    );

    const data = await response.json();
    if (response.ok) return NextResponse.json(data);
    return new Response(JSON.stringify(data), {
      status: response.status,
    });
  } catch (error) {
    return new Response("Error fetching and processing LOA TYPE  data", {
      status: 500,
    });
  }
}
