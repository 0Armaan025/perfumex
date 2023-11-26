import { NextResponse } from "next/server";

export function GET(request, {params}) {
    console.log(params);
    const {query} = params;
    console.log("user id ", query);

    return NextResponse.json({
        message: "testing GET",
    });
}