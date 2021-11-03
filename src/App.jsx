import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
    const [sideBarExpand, setsideBarExpand] = useState((window.innerWidth > 880 ? true : false));
    return (
        <>
            <Header sideBar={() => { setsideBarExpand(!sideBarExpand) }} />
            <Main aside={sideBarExpand} />
        </>
    )
}

export default App
