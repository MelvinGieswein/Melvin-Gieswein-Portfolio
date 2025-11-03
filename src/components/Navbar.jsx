import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar(){
  return (
    <header className="header">
      <div className="navbar-container">
        <div className="brand">
          <div className="logo pixel-border">
            <img src={`${import.meta.env.BASE_URL}Media/images/Logo.png`} alt="logo" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
          <h1>Melvin</h1>
        </div>

        <nav>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}