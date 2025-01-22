import './App.css';

function Header() {
    const CODERS = "{ CODERS }";
    return (
    <header class="main-header">
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <span class="navbar-brand brand-name"><a href="index.html">{CODERS}</a></span>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="missao.html">/Sobre-Nós</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="razoes-para-aprender-a-programar.html">/Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    );
  }
  
  export default Header;