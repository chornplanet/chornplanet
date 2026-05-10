// src/food/component/layouts/DesktopLayout.tsx

import '@/template/style/desktop/layout-desktop.scss'
import React from 'react'
import Link from 'next/link'

export default function DesktopLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="desktop-container">
            <header className="desktop-navbar">
                <div className="desktop-navbar-container">
                    <div className="logo">
                        Chorn Planet Food App
                    </div>
                    <nav>
                        <Link href="/food">Home</Link>
                        <Link href="/food/orders">Orders</Link>
                        <Link href="/food/account">Account</Link>
                    </nav>
                </div>
            </header>

            <main className="desktop-main">
                <div className="desktop-main-container">
                    {children}
                </div>
            </main>

            <footer className="desktop-footer">
                <div className="desktop-footer-container">
                    © 2025 Chorn Planet Food App Inc. All rights reserved.
                </div>
            </footer>
        </div>
    )
}
