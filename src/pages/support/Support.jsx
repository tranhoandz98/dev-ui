import { useApp } from 'context/AppContext';
import React, {useEffect} from 'react'

const Support = () => {
  const { setIsSideBar } = useApp();
  useEffect(() => {
    setIsSideBar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>Support</div>
  )
}

export default Support