import { NextResponse } from "next/server";

export function GET(request) {
    const users = [
        {
            name: 'armaan',
            phone: '7837433000',
            course: 'java',
        },
        {
            name: 'armaan',
            phone: '7837433000',
            course: 'java',
        },
        {
            name: 'armaan',
            phone: '7837433000',
            course: 'java',
        },
        {
            name: 'armaan',
            phone: '7837433000',
            course: 'java',
        },
        {
            name: 'armaan',
            phone: '7837433000',
            course: 'java',
        },
        {
            name: 'armaan',
            phone: '7837433000',
            course: 'java',
        },
        {
            name: 'armaan',
            phone: '7837433000',
            course: 'java',
        },
        {
            name: 'armaan',
            phone: '7837433000',
            course: 'java',
        },

    ];

    return NextResponse.json(users);


}