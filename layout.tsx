import type React from "react"
import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"], weight: ["700"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}

