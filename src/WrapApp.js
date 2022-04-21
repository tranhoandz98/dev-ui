import EmptyPage from 'components/EmptyPage'
import React, { lazy, Suspense } from 'react'

// import 'primereact/resources/themes/tailwind-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
import './assets/style/layout.scss';
import AppTranslations from 'translations';
import { AppProvider } from 'context/AppProvider';
import { ThemeProvider } from 'context/theme/ThemeContext';


const WrapApp = () => {
    const LazyApp = lazy(() => import("./App"));

    return (
        <Suspense fallback={<EmptyPage />}>
            <ThemeProvider>
                <AppProvider>
                    <AppTranslations>
                        <LazyApp />
                    </AppTranslations>
                </AppProvider>
            </ThemeProvider>
        </Suspense>
    )
}

export default WrapApp
