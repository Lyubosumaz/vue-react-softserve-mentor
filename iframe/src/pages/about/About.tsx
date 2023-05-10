import './About.css';
import logo from './logo.svg';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <img src={logo} className="About-logo" alt="logo" />
        <p>
          Edit <code>src/page/about/About.tsx</code> and save to reload.
        </p>
        <a
          className="About-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default About;
