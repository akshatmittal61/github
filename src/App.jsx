import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
    const [sideBarExpand, setsideBarExpand] = useState((window.innerWidth > 880 ? true : false));
    return (
        <>
            <Header sideBar={() => { setsideBarExpand(!sideBarExpand) }} />
            <Main aside={sideBarExpand} />
            {/* <Footer /> */}
        </>
    )
}

export default App
