import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TaskMaster - Master Your Tasks, Conquer Your Day",
  description: "TaskMaster is a powerful task management tool that helps you stay organized and productive.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('click', (e) => {
              const target = e.target;
              if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const id = target.getAttribute('href').slice(1);
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }
            });
          `,
          }}
        />
      </body>
    </html>
  )
}

