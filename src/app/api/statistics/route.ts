import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        // Ülkelere göre ziyaret sayıları
        const visitorStats = await prisma.visit.groupBy({
            by: ['country'],
            _count: {
                id: true
            },
            orderBy: {
                _count: {
                    id: 'desc'
                }
            }
        })

        // Saatlik ziyaret dağılımı
        const hourlyStats = await prisma.visit.groupBy({
            by: ['hour'],
            _count: {
                id: true
            },
            orderBy: {
                hour: 'asc'
            }
        })

        // API yanıtını konsola yazdır (debug için)
        console.log('Visitor Stats:', visitorStats)
        console.log('Hourly Stats:', hourlyStats)

        // Verileri istemcinin beklediği formata dönüştür
        const formattedVisitorStats = visitorStats.map(stat => ({
            country: stat.country,
            count: stat._count.id
        }))

        const formattedHourlyStats = {
            labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
            datasets: [{
                label: 'Visits',
                data: Array.from({ length: 24 }, (_, hour) => {
                    const hourData = hourlyStats.find(stat => stat.hour === hour)
                    return hourData ? hourData._count.id : 0
                }),
                fill: true,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4
            }]
        }

        return NextResponse.json({
            visitorStats: formattedVisitorStats,
            hourlyStats: formattedHourlyStats
        })
    } catch (error) {
        console.error('Statistics error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch statistics' },
            { status: 500 }
        )
    }
} 