import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume - Ahmet Erdem Yeniay',
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 