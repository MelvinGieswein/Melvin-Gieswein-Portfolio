import { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState('dark')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
  },[theme])

  return (
    <button aria-label="Theme Toggle" className="theme-toggle" onClick={()=> setTheme(t=> t === 'dark' ? 'light' : 'dark') }>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}