import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        const pageVisits = await prisma.pageView.groupBy({
            by: ['path'],
            _count: {
                path: true
            },
            orderBy: {
                _count: {
                    path: 'desc'
                }
            }
        })

        // Verileri daha kullanışlı bir formata dönüştür
        const formattedData = pageVisits.map(item => ({
            path: item.path === '/' ? 'Home' : item.path.replace('/', '').split('/')[0],
            visits: item._count.path
        }))

        return NextResponse.json(formattedData)

    } catch (error) {
        console.error('Error fetching most visited pages:', error)
        return NextResponse.json(
            { error: 'Veri çekme başarısız' },
            { status: 500 }
        )
    }
} 