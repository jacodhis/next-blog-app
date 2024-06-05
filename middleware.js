import { NextResponse } from 'next/server'

const isLoggedIn =  true;

export function middleware(req) {

    if (isLoggedIn) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
    matcher:['/products',]
}