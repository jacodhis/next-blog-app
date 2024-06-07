import { NextResponse } from 'next/server'

export function middleware(req) {
    const token = req.cookies.get('authToken');

    if (token) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', req.url))
}
//specifies the routes which the middleware should be applied
export const config = {
    // matcher:['/products/:path*',]
    matcher:['/dashboard']
}