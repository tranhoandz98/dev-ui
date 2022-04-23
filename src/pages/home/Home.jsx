import { useApp } from 'context/AppContext'
import React, { useEffect } from 'react'
import ProjectList from './ProjectList'
import SoftwareList from './SoftwareList'

const Home = () => {
    const { setIsSideBar } = useApp();
    useEffect(() => {
        setIsSideBar(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container mx-auto">
            <ProjectList />
            <SoftwareList />
        </div>
    )
}

export default Home
