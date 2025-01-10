'use client'

import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

interface PageVisit {
    path: string
    visits: number
}

export default function MostVisitedPages() {
    const [data, setData] = useState<PageVisit[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('/api/analytics/most-visited')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => {
                setError('Veri yüklenirken bir hata oluştu')
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Yükleniyor...</div>
    if (error) return <div className="text-red-500">{error}</div>

    const chartData = {
        labels: data.map(item => item.path),
        datasets: [
            {
                label: 'Sayfa Ziyaretleri',
                data: data.map(item => item.visits),
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgb(59, 130, 246)',
                borderWidth: 1
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                En Çok Ziyaret Edilen Sayfalar
                <span className="text-sm font-normal text-gray-500 ml-2">
                    (Toplam ziyaret sayısı)
                </span>
            </h2>
            <div className="h-[400px]">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    )
} 