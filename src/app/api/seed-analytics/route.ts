import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera']
const devices = ['Mobile', 'Desktop', 'Tablet']
const pages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
    { path: '/statistics', name: 'Statistics' },
    { path: '/contact', name: 'Contact' }
]
const projects = [
    { slug: 'portfolio-website', name: 'Portfolio Website' },
    { slug: 'e-commerce-app', name: 'E-commerce App' },
    { slug: 'task-manager', name: 'Task Manager' },
    { slug: 'weather-app', name: 'Weather App' },
    { slug: 'chat-application', name: 'Chat Application' }
]

export async function GET() {
    try {
        await prisma.$connect()

        // Genel sayfa görüntülemeleri
        const pageViews = Array(100).fill(null).map(() => ({
            path: pages[Math.floor(Math.random() * pages.length)].path,
            duration: Math.floor(Math.random() * 600) + 30, // 30-630 saniye arası
            browser: browsers[Math.floor(Math.random() * browsers.length)],
            device: devices[Math.floor(Math.random() * devices.length)],
            timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Son 30 gün
            projectSlug: null
        }))

        // Proje sayfası görüntülemeleri
        const projectViews = Array(50).fill(null).map(() => {
            const project = projects[Math.floor(Math.random() * projects.length)]
            return {
                path: `/projects/${project.slug}`,
                duration: Math.floor(Math.random() * 300) + 60, // 60-360 saniye arası
                browser: browsers[Math.floor(Math.random() * browsers.length)],
                device: devices[Math.floor(Math.random() * devices.length)],
                timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
                projectSlug: project.slug
            }
        })

        // Verileri ekle
        await prisma.pageView.createMany({
            data: [...pageViews, ...projectViews]
        })

        return NextResponse.json({ 
            message: 'Analytics test verileri eklendi',
            pageViews: pageViews.length,
            projectViews: projectViews.length
        })

    } catch (error) {
        console.error('Hata:', error)
        return NextResponse.json(
            { error: 'Veri ekleme başarısız', details: error.message },
            { status: 500 }
        )
    } finally {
        await prisma.$disconnect()
    }
} 