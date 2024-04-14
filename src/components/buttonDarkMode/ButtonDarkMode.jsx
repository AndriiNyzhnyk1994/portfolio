import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import sun from './icons/sun.svg'
import moon from './icons/moon.svg'

function ButtonDarkMode() {
    
    const [themeMode, setThemeMode] = useState('light')
    const buttonRef = useRef(null)

    
    const toggleDarkMode = () => {
        setThemeMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    useEffect(() => {
        if (themeMode === 'dark') {
            document.body.classList.add('dark')
            buttonRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            buttonRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [themeMode])
    
    
    return (
        <button ref={buttonRef} onClick={toggleDarkMode} className="dark-mode-btn">
            <img src={moon} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={sun} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}

export default ButtonDarkMode