'use client'
import { useState, useEffect, useRef } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { Line, Pie, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { hourlyData, visitorStats } from './data'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

// Yerel GeoJSON dosyasını kullanalım
const geoUrl = "/data/world.json"

type TabType = 'map' | 'hourly'

export default function Statistics() {
    const [activeTab, setActiveTab] = useState<TabType>('map')
    const [position, setPosition] = useState({ coordinates: [20, 30], zoom: 1.5 })
    const [tooltipContent, setTooltipContent] = useState("")
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
    const [stats, setStats] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true)
                const response = await fetch('/api/statistics')
                const data = await response.json()
                console.log('Fetched Stats:', data)
                setStats(data)
            } catch (error) {
                console.error('Error:', error)
                setError('Failed to fetch statistics')
            } finally {
                setLoading(false)
            }
        }

        fetchStats()
    }, [])

    const handleMouseMove = (event: React.MouseEvent) => {
        if (mapRef.current) {
            const rect = mapRef.current.getBoundingClientRect()
            setTooltipPosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            })
        }
    }

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    }

    // Hata durumu
    if (error) {
        return (
            <div className="container mx-auto py-20 px-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    Error: {error}
                </div>
            </div>
        )
    }

    // Veri yok durumu
    if (!stats?.visitorStats?.length) {
        return (
            <div className="container mx-auto py-20 px-4">
                <h1 className="text-3xl font-bold text-center text-primary mb-12">
                    Website Statistics
                </h1>
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                    <p className="text-gray-600">
                        No visitor data available yet. Please add test data by visiting /api/seed
                    </p>
                </div>
            </div>
        )
    }

    // Grafik verilerini hazırla
    const hourlyData = {
        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
        datasets: [{
            label: 'Visits',
            data: stats?.hourlyStats?.datasets?.[0]?.data || Array(24).fill(0),
            fill: true,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'line',
                    boxWidth: 50,
                    padding: 20,
                    color: '#4B5563',
                    font: {
                        size: 12,
                        weight: '500'
                    }
                }
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }

    return (
        <div className="container mx-auto py-20 px-4">
            <h1 className="text-3xl font-bold text-center text-primary mb-12">
                Website Statistics
            </h1>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
                    <button
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === 'map'
                                ? 'bg-primary text-white'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('map')}
                    >
                        Visitor Map
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            activeTab === 'hourly'
                                ? 'bg-primary text-white'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('hourly')}
                    >
                        Hourly Stats
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                {activeTab === 'map' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Visitor Distribution by Country
                            <span className="text-sm font-normal text-gray-500 ml-2">
                                (Hover over countries to see visit counts)
                            </span>
                        </h2>

                        <div className="w-full flex flex-col items-center">
                            <div 
                                ref={mapRef}
                                className="relative w-full aspect-[2/1] max-w-5xl bg-white select-none"
                                onMouseMove={handleMouseMove}
                            >
                                <ComposableMap
                                    projectionConfig={{
                                        scale: 180,
                                        center: [20, 30]
                                    }}
                                    className="w-full h-full"
                                >
                                    <ZoomableGroup
                                        zoom={position.zoom}
                                        center={position.coordinates}
                                        onMoveEnd={setPosition}
                                        maxZoom={5}
                                        minZoom={1}
                                    >
                                        <Geographies geography={geoUrl}>
                                            {({ geographies }) =>
                                                geographies.map((geo) => {
                                                    const isVisited = stats?.visitorStats?.find(
                                                        (d: any) => d.country === geo.properties.name
                                                    )
                                                    return (
                                                        <Geography
                                                            key={geo.rsmKey}
                                                            geography={geo}
                                                            onMouseEnter={() => {
                                                                const { name } = geo.properties
                                                                const visitors = isVisited ? isVisited.count : 0
                                                                setTooltipContent(`${name}: ${visitors} visits`)
                                                            }}
                                                            onMouseLeave={() => {
                                                                setTooltipContent("")
                                                            }}
                                                            style={{
                                                                default: {
                                                                    fill: isVisited ? "#3b82f6" : "#D6D6DA",
                                                                    stroke: "#FFFFFF",
                                                                    strokeWidth: 0.5,
                                                                    outline: "none"
                                                                },
                                                                hover: {
                                                                    fill: isVisited ? "#2563eb" : "#A0A0A0",
                                                                    stroke: "#FFFFFF",
                                                                    strokeWidth: 0.5,
                                                                    outline: "none"
                                                                },
                                                                pressed: {
                                                                    fill: "#2563eb",
                                                                    stroke: "#FFFFFF",
                                                                    strokeWidth: 0.5,
                                                                    outline: "none"
                                                                }
                                                            }}
                                                        />
                                                    )
                                                })
                                            }
                                        </Geographies>
                                    </ZoomableGroup>
                                </ComposableMap>
                                {tooltipContent && (
                                    <div 
                                        className="absolute bg-white px-3 py-2 rounded-lg shadow-lg text-sm z-50 pointer-events-none"
                                        style={{
                                            left: `${tooltipPosition.x}px`,
                                            top: `${tooltipPosition.y}px`,
                                            border: '1px solid #e2e8f0'
                                        }}
                                    >
                                        {tooltipContent}
                                    </div>
                                )}
                            </div>

                            {/* Zoom kontrolleri */}
                            <div className="flex justify-center gap-4 mt-4">
                                <button
                                    className="p-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
                                    onClick={() => setPosition(pos => ({ ...pos, zoom: Math.min(pos.zoom * 1.5, 5) }))}
                                    title="Zoom In"
                                >
                                    <MagnifyingGlassPlusIcon className="w-5 h-5" />
                                </button>
                                <button
                                    className="p-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
                                    onClick={() => setPosition(pos => ({ ...pos, zoom: Math.max(pos.zoom / 1.5, 1) }))}
                                    title="Zoom Out"
                                >
                                    <MagnifyingGlassMinusIcon className="w-5 h-5" />
                                </button>
                                <button
                                    className="p-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors"
                                    onClick={() => setPosition({ coordinates: [20, 30], zoom: 1.5 })}
                                    title="Reset View"
                                >
                                    <ArrowPathIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'hourly' && (
                    <>
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">
                            Hourly Visit Distribution
                            <span className="text-sm font-normal text-gray-500 ml-2">
                                (Visit counts by hour of day)
                            </span>
                        </h2>
                        <div className="h-[400px]">
                            <Line data={hourlyData} options={options} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
} 