// Saatlik ziyaret verileri
export const hourlyData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
        {
            label: 'Visits',
            data: [
                65, 45, 30, 20, 15, 10, 15, 25, 40, 60,
                85, 95, 100, 90, 85, 80, 75, 70, 65, 60,
                55, 50, 45, 40
            ],
            fill: true,
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4
        }
    ]
}

// Ziyaretçi istatistikleri
export const visitorStats = [
    { country: "Turkey", count: 150 },
    { country: "Germany", count: 89 },
    { country: "United States", count: 75 },
    { country: "United Kingdom", count: 62 },
    { country: "France", count: 45 },
    { country: "Spain", count: 38 },
    { country: "Italy", count: 35 },
    { country: "Netherlands", count: 28 },
    { country: "Belgium", count: 25 },
    { country: "Switzerland", count: 22 }
] 