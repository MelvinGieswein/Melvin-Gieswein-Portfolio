export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Melvin Gieswein — Crafted with care.</div>
      <div style={{marginTop:8}}>
        <a href="mailto:98172640+Melvin2611@users.noreply.github.com" style={{color:'var(--muted)',textDecoration:'none'}}>Email</a>
      </div>
    </footer>
  )
}