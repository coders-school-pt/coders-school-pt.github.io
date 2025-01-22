import './App.css';

import codersLogo from './assets/coder.png';
import joinus from './assets/join_us.png';

function App() {
  const mainTitle = "/escola-de-programação";
  return (
    <main class="main-content" id="landing-page">
        <div class="container">
            <div class="row main-page">
                <div class="col-12 col-sm-12 col-md-12 col-xxl-12 offset-xxl-1">
                    <h1 id="main-title" align="center">{mainTitle}</h1>
                    <br />
                    <p align="center" className="tipo-ensino">
                      <span>Ensino </span>
                      <strong>
                        <span>Online</span>
                      </strong>
                      {' & '}
                      <strong>
                        <span>Presencial</span>
                      </strong>
                    </p>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-xxl-6 offset-xxl-1 coders-text">
                    <h4>
                      {"Coders são pessoas que programam, ou em Inglês, "}
                      <span class="highlight">{"\"people who code\""}</span>
                      {"."}
                    </h4>
                    <img class="joinus" src={joinus} />
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-xxl-6 offset-xxl-6 coders-logo">
                    <img src={codersLogo} />
                </div>
            </div>
        </div>
        <br />
    </main>
  );
}
export default App;
