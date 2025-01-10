import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
    try {
        // Daha fazla örnek veri
        const sampleVisits = [
            // Türkiye'den ziyaretler
            ...Array(50).fill(null).map(() => ({
                country: "Turkey",
                hour: Math.floor(Math.random() * 24)
            })),
            
            // Avrupa'dan ziyaretler
            ...Array(30).fill(null).map(() => ({
                country: "Germany",
                hour: Math.floor(Math.random() * 24)
            })),
            ...Array(20).fill(null).map(() => ({
                country: "United Kingdom",
                hour: Math.floor(Math.random() * 24)
            })),
            ...Array(15).fill(null).map(() => ({
                country: "France",
                hour: Math.floor(Math.random() * 24)
            })),
            ...Array(10).fill(null).map(() => ({
                country: "Spain",
                hour: Math.floor(Math.random() * 24)
            })),

            // Amerika'dan ziyaretler
            ...Array(40).fill(null).map(() => ({
                country: "United States",
                hour: Math.floor(Math.random() * 24)
            })),
            ...Array(25).fill(null).map(() => ({
                country: "Canada",
                hour: Math.floor(Math.random() * 24)
            })),
            ...Array(15).fill(null).map(() => ({
                country: "Brazil",
                hour: Math.floor(Math.random() * 24)
            })),

            // Asya'dan ziyaretler
            ...Array(35).fill(null).map(() => ({
                country: "Japan",
                hour: Math.floor(Math.random() * 24)
            })),
            ...Array(30).fill(null).map(() => ({
                country: "South Korea",
                hour: Math.floor(Math.random() * 24)
            })),
            ...Array(25).fill(null).map(() => ({
                country: "China",
                hour: Math.floor(Math.random() * 24)
            })),
            ...Array(20).fill(null).map(() => ({
                country: "India",
                hour: Math.floor(Math.random() * 24)
            })),

            // Okyanusya'dan ziyaretler
            ...Array(15).fill(null).map(() => ({
                country: "Australia",
                hour: Math.floor(Math.random() * 24)
            })),

            // Orta Doğu'dan ziyaretler
            ...Array(20).fill(null).map(() => ({
                country: "United Arab Emirates",
                hour: Math.floor(Math.random() * 24)
            }))
        ]

        // Verileri veritabanına ekle
        await Promise.all(
            sampleVisits.map(visit =>
                prisma.visit.create({
                    data: {
                        country: visit.country,
                        hour: visit.hour,
                        timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000) // Son 24 saat içinde rastgele
                    }
                })
            )
        )

        return NextResponse.json({ 
            message: 'Test verileri eklendi',
            count: sampleVisits.length
        })
    } catch (error) {
        console.error('Seed error:', error)
        return NextResponse.json(
            { error: 'Veri ekleme başarısız' },
            { status: 500 }
        )
    }
} 