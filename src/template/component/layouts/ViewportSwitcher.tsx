'use client'

import {useSyncExternalStore, type ReactNode} from 'react'
import MobileLayout from '@/template/component/layouts/MobileLayout'
import DesktopLayout from '@/template/component/layouts/DesktopLayout'

function subscribeToResize(callback: () => void) {
    window.addEventListener('resize', callback)
    return () => window.removeEventListener('resize', callback)
}

function getViewportSnapshot() {
    return window.innerWidth < 768
}

function getServerViewportSnapshot() {
    return false
}

export default function ViewportSwitcher({children}: { children: ReactNode }) {
    const isMobile = useSyncExternalStore(
        subscribeToResize,
        getViewportSnapshot,
        getServerViewportSnapshot
    )

    return isMobile ? <MobileLayout>{children}</MobileLayout> : <DesktopLayout>{children}</DesktopLayout>
}
