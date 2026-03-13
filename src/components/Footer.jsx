export default function Footer({ name, social }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">Reyhandhani<span>.</span></p>

        <div className="footer-social">
          {social.github    && <a href={social.github}    target="_blank" rel="noreferrer">GitHub</a>}
          {social.linkedin  && <a href={social.linkedin}  target="_blank" rel="noreferrer">LinkedIn</a>}
          {social.twitter   && <a href={social.twitter}   target="_blank" rel="noreferrer">Twitter</a>}
          {social.instagram && <a href={social.instagram} target="_blank" rel="noreferrer">Instagram</a>}
        </div>

        <p className="footer-copy">&copy; {year} {name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
