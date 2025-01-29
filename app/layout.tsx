import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Portfolio",
  description: "Frontend Developer & UX Architect",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark">
            <Nav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

