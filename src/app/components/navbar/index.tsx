"use client"
import { IoClose, IoHome, IoMenu, IoMoon, IoSunny } from 'react-icons/io5'
import { useEffect, useState } from 'react'

import useTheme from '@/app/hooks/useTheme'
import './navbar.css'
import { goTo } from '@/lib'

export default function Navbar() {

  const [showMobile, setShowMobile] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const iconSize = 25


  const links = [
    {
      id: 1,
      link: 'projects'
    },
    {
      id: 2,
      link: 'tech'
    },
    {
      id: 3,
      link: 'contact'
    }
  ]


  const showHideMobile = () => {
    setShowMobile(!showMobile)
  }

  const handleClickMobile = (id: string) => {
    goTo(id)
    showHideMobile()
  }

  const toggleThemeMobile = () => {
    toggleTheme()
    showHideMobile()
  }

  useEffect(() => {
    document.querySelector("body")?.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <nav className="navbar">

      <div className="navbar__home" onClick={() => goTo("home")}>
        <IoHome className="home-icon" size={iconSize} />
      </div>
      <ul className='navbar__links'>
        {
          links.map(({ id, link }) =>
          (
            <li key={id}>
              <button className="link" onClick={() => goTo(link)}>{link}</button>
            </li>)
          )
        }
      </ul>

      <div className="navbar__icon" onClick={toggleTheme}>
        {theme === 'dark' ? <IoMoon className="icon" size={iconSize} /> : <IoSunny className="icon" size={iconSize} />}
      </div>

      <div className='mobile__container'>
        <div
          className="mobile__icon"
          onClick={showHideMobile}
          aria-controls='mobile__links'
          aria-expanded={showMobile}>
          {showMobile ? <IoClose size={iconSize} /> : <IoMenu size={iconSize} />}
        </div>
        {showMobile && (
          <ul className="mobile__links" id="mobile__links">
            {

              links.map(({ id, link }) =>
              (
                <li key={id}>
                  <button
                    onClick={() => handleClickMobile(link)}
                  >
                    {link}
                  </button>
                </li>)
              )
            }
            <li onClick={toggleThemeMobile}>
              Theme
            </li>
          </ul>

        )}
      </div>
    </nav >
  )
}
