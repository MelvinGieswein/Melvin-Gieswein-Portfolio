import SkillTag from '../components/SkillTag'

export default function About(){
  return (
    <section>
      <h1>About Me</h1>
      <p style={{color:'var(--muted)'}}>Kurz, prägnant und professionell: Ich bin Melvin — ein Entwickler und Digital Artist. Ich spezialisiere mich auf responsive Web Development und kreative Animationen.</p>
      <h3 style={{marginTop:18}}>What I Do</h3>
      <ul>
        <li>Modern responsive Websites (React, Vite)</li>
        <li>2D/Programmatic Animations (Manim, Blender)</li>
        <li>Game & App Prototyping</li>
        <li>Video Editing (DaVinci Resolve)</li>
      </ul>
      <h3 style={{marginTop:12}}>Skills</h3>
      <div className="skills">
        {['React','JS','Kotlin','Manim','DaVinci','Pixel Art'].map(s=> <SkillTag key={s} name={s} />)}
      </div>
    </section>
  )
}