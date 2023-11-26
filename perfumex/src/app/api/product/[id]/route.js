import { NextResponse } from "next/server";

export function GET(request, {params}) {
    console.log(params);
    const {id} = params;
    console.log("user id ", id);

    return NextResponse.json({
        message: "testing GET",
    });
}