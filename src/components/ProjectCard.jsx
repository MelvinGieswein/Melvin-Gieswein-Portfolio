import { motion } from 'framer-motion'

export default function ProjectCard({project}){
  return (
    <motion.article className="project-card" whileHover={{ y: -6 }}>
      <img src={project.image} alt={project.title} loading="lazy" />
      <div style={{marginTop:10}}>
        <div className="project-meta">
          <div>
            <div className="project-title">{project.title}</div>
            <div className="project-stack">{project.stack.join(' • ')}</div>
          </div>
        </div>
        <p style={{marginTop:8,color:'var(--muted)'}}>{project.description}</p>
        <div style={{display:'flex',gap:8,marginTop:12}}>
          <a href={project.code} target="_blank" rel="noreferrer" className="btn-link">Code</a>
          <a href={project.live} target="_blank" rel="noreferrer" className="btn-link">Live</a>
        </div>
      </div>
    </motion.article>
  )
}