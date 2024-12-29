export default function Home() {
  return (
    <div className="home-container">
      <p className="name">Amin Momin</p>
      <p className="role">Student at The Univeristy of Texas at Austin</p>
      <div className="home-logo">
        <a href="https://github.com/aminmomin2/personal-projects" rel="noreferrer" target="_blank">
          <img src="/github-logo.png" alt="github logo" className="github-logo"/>
        </a>
        <a href="https://www.linkedin.com/in/aminmomin1" rel="noreferrer" target="_blank">
          <img src="/linkedin-logo.png" alt="linkedIn logo" className="linkedin-logo"></img>
        </a>
        <a href="mailto:aminmomin2006@gmail.com" rel="noreferrer" target="_blank">
          <img src="/mail-logo.png" alt="linkedIn logo" className="email-logo"></img>
        </a>
      </div>
    </div>
  )
}