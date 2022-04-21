import EmptyPage from 'components/EmptyPage'
import React, { lazy, Suspense, useEffect } from 'react'

import { AppProvider } from 'context/AppProvider';
import { ThemeProvider } from 'context/theme/ThemeContext';

import {
    QueryClient,
    QueryClientProvider,
    useQueryErrorResetBoundary,
} from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import AppTranslations from './translations/index';

import PageProgress from 'react-page-progress'
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "components/ErrorBoundary/ErrorFallback";
import { KeycloakProvider } from "@react-keycloak/web";
import keycloak from './keycloak';


import './assets/style/layout.scss';
import ScrollToTop from 'components/scroll-to-top/ScrollToTop';


const WrapApp = () => {
    const LazyApp = lazy(() => import("./App"));

    const queryClient = new QueryClient()
    useEffect(() => {
        queryClient.setDefaultOptions({
            queries: {
                staleTime: 15000,
                keepPreviousData: true,
                // cacheTime: 0,
                refetchOnWindowFocus: false,
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { reset } = useQueryErrorResetBoundary()

    return (

        <BrowserRouter>

            <ErrorBoundary
                onReset={reset}
                FallbackComponent={ErrorFallback}
            >
                <Suspense fallback={<EmptyPage />}>
                    <KeycloakProvider
                        keycloak={keycloak}>
                        <QueryClientProvider client={queryClient}>
                            <ThemeProvider>
                                <AppProvider>
                                    <AppTranslations>
                                    <PageProgress color={"#C1282E"} height={4} className="PageProgress" />

                                    <ScrollToTop>
                                        <LazyApp />
                                    </ScrollToTop>

                                    </AppTranslations>
                                </AppProvider>
                            </ThemeProvider>
                            <ReactQueryDevtools initialIsOpen />
                        </QueryClientProvider>
                    </KeycloakProvider>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter >
    )
}

export default WrapApp
