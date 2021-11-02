import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
    const [side, setSide] = useState(window.innerWidth > 880 ? true : false);
    const handleSide = () => { setSide(!side) }
    return (
        <>
            <Header open={handleSide} />
            <Main sidebar={side} />
            <Footer />
        </>
    )
}

export default App
