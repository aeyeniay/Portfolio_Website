import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const runtime = 'nodejs'

export async function POST(request: Request) {
    try {
        const { ip, userAgent, referer, url } = await request.json()
        
        const result = await pool.query(
            `INSERT INTO visitors 
             (ip_address, user_agent, referrer_url, page_url) 
             VALUES ($1, $2, $3, $4)
             RETURNING id`,
            [ip, userAgent, referer, url]
        )

        return NextResponse.json({ success: true, id: result.rows[0].id })
    } catch (error) {
        console.error('Error tracking visit:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
} 