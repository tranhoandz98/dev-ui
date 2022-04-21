import React from 'react'
import AppRouter from './router/AppRouter';
import WrapLayout from './components/layout/layout';

const App = () => {

    return (
        <div className='App  bg-white text-slate-700 dark:text-slate-400 dark:bg-slate-900
        '>
            <WrapLayout>
                <AppRouter />
            </WrapLayout>

        </div>
    )
}

export default App
