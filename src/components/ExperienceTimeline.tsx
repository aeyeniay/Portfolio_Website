'use client'
import { useEffect, useRef } from 'react'

type TimelineData = {
  company: string
  startDate: Date
  endDate: Date
  duration: string
  type: string
}

export default function ExperienceTimeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const experiences: TimelineData[] = [
    {
      company: "Palandoken Investment",
      startDate: new Date("2017-08"),
      endDate: new Date("2019-03"),
      duration: "1 yr 8 months",
      type: "Full-time"
    },
    {
      company: "Günko Endüstriyel",
      startDate: new Date("2016-10"),
      endDate: new Date("2017-07"),
      duration: "10 months",
      type: "Full-time"
    },
    {
      company: "Boğaziçi Proje",
      startDate: new Date("2012-08"),
      endDate: new Date("2012-12"),
      duration: "5 months",
      type: "Part-time"
    },
    {
      company: "HİDROMEK",
      startDate: new Date("2012-07"),
      endDate: new Date("2012-08"),
      duration: "2 months",
      type: "Full-time"
    }
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Canvas boyutlarını ayarla
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Timeline'ı çiz
    const startX = 100
    const endX = canvas.width / window.devicePixelRatio - 100
    const centerY = canvas.height / window.devicePixelRatio / 2

    // Ana çizgi
    ctx.beginPath()
    ctx.moveTo(startX, centerY)
    ctx.lineTo(endX, centerY)
    ctx.strokeStyle = '#E5E7EB'
    ctx.lineWidth = 2
    ctx.stroke()

    // Tarihleri hesapla
    const minDate = new Date("2012-07")
    const maxDate = new Date("2019-03")
    const timeRange = maxDate.getTime() - minDate.getTime()
    const pixelRange = endX - startX

    // Her deneyim için nokta ve etiket ekle
    experiences.forEach((exp) => {
      const startPoint = startX + ((exp.startDate.getTime() - minDate.getTime()) / timeRange) * pixelRange
      const endPoint = startX + ((exp.endDate.getTime() - minDate.getTime()) / timeRange) * pixelRange

      // Deneyim çizgisi
      ctx.beginPath()
      ctx.moveTo(startPoint, centerY)
      ctx.lineTo(endPoint, centerY)
      ctx.strokeStyle = '#4F46E5'
      ctx.lineWidth = 6
      ctx.stroke()

      // Başlangıç ve bitiş noktaları
      ctx.beginPath()
      ctx.arc(startPoint, centerY, 4, 0, Math.PI * 2)
      ctx.arc(endPoint, centerY, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#4F46E5'
      ctx.fill()

      // Şirket adı ve süre
      ctx.font = '12px Inter'
      ctx.fillStyle = '#4B5563'
      ctx.textAlign = 'center'
      
      // Alternatif olarak üst ve alt etiketler
      const yOffset = (experiences.indexOf(exp) % 2 === 0) ? -30 : 40
      ctx.fillText(exp.company, (startPoint + endPoint) / 2, centerY + yOffset)
      ctx.fillText(exp.duration, (startPoint + endPoint) / 2, centerY + yOffset + 20)
    })

  }, [])

  return (
    <div className="w-full h-64 mb-12">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
} 