import { motion } from 'framer-motion'
import SkillTag from '../components/SkillTag'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="hero-card">
          <motion.h2 className="hero-title" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}>Melvin Gieswein</motion.h2>
          <motion.p className="hero-sub" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}>Web Developer • Animator • Digital Artist</motion.p>

          <div style={{marginTop:16}}>
            <a className="hero-cta" href="#projects">View Featured Work</a>
          </div>

          <div className="skills" aria-hidden>
            {['React','Kotlin','Manim','DaVinci Resolve','Pixel Art'].map(s=> <SkillTag key={s} name={s} />)}
          </div>
        </div>

        <div style={{padding:14}}>
          <img src={`${import.meta.env.BASE_URL}Media/images/HeroPixel.png`} alt="pixel-hero" style={{width:'100%',borderRadius:12,boxShadow:'6px 6px 0 rgba(0,0,0,0.5)'}} />
        </div>
      </section>

      <section style={{marginTop:40}}>
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(p=> <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      <section style={{marginTop:40}}>
        <h2>Focus</h2>
        <p style={{color:'var(--muted)'}}>Priorities — Web Development & Websites (primary), Animations (secondary), Software (tertiary), Video Editing (support).</p>
      </section>
    </>
  )
}