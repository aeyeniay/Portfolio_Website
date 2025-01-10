import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'nodejs',
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}

export async function middleware(request: NextRequest) {
    const ip = request.headers.get('x-forwarded-for') || request.ip
    const userAgent = request.headers.get('user-agent') || ''
    const referer = request.headers.get('referer') || ''
    const url = request.url

    // Tam URL oluştur
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin
    
    // API route üzerinden işle
    await fetch(`${baseUrl}/api/track-visit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ip,
            userAgent,
            referer,
            url
        })
    })

    return NextResponse.next()
} 