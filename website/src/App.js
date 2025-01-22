import './App.css';
import codersLogo from './assets/coder.png';
import joinus from './assets/join_us.png';

function App() {
  const mainTitle = "/escola-de-programação";

  return (
    <main className="main-content" id="landing-page">
      <div className="container">
        <div className="row main-page">
          <div className="col-12 col-sm-12 col-md-12 col-xxl-12 offset-xxl-1 text-center">
            <h1 id="main-title">{mainTitle}</h1>
            <p className="tipo-ensino">
              <span>Ensino </span>
              <strong><span>Online</span></strong>
              {' & '}
              <strong><span>Presencial</span></strong>
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-xxl-6 offset-xxl-1 coders-text">
            <h4>
              Coders são pessoas que programam, ou em Inglês,{' '}
              <span className="highlight">"people who code"</span>.
            </h4>
            <img className="joinus" src={joinus} alt="Join Us" />
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-xxl-6 offset-xxl-6 coders-logo">
            <img src={codersLogo} alt="Coders Logo" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
