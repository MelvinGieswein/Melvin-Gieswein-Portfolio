import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects(){
  return (
    <section>
      <h1>Projects</h1>
      <p style={{color:'var(--muted)'}}>Alle Projekte sind derzeit Platzhalter — du kannst sie leicht ersetzen.</p>
      <div className="projects-grid" style={{marginTop:18}}>
        {projects.map(p=> <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}