import './App.css';

import threads from './assets/threads.png';
import tiktok from './assets/tiktok.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import emailIcon from './assets/e-mail.png';

function Footer() {
  const name = "{ CODERS } - People Who Code";
  const email = "coders.pt.aulas@gmail.com";
  const phone = "+351 931 638 749";
  const livrorec = "Livro de Reclamações";
  const pp = "Política de Privacidade";
  return (
    <footer class="contactos" id="contactos">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-5 info-section">
                <div id="logo">
                    <strong>{name}</strong>
                    <p id="logo-exp">{"Escola de Programação para Miúdos e Graúdos"}</p>
                </div>
                <p>
                    {"Largo dos Aviadores, SN"}
                    <br />
                    {"5050-240 Peso da Régua"}
                    <br />
                    {"Portugal"}
                </p>
                <br />
                <p>
                    <img class="contact-icon" src={emailIcon} /><a href="mailto:coders.pt.aulas@gmail.com">{email}</a>
                    <br />
                    <img class="whatsapp-icon" src={whatsapp} /><a href="https://wa.me/message/BC3PJRRSJJL2K1">{phone}</a>
                </p>
            </div>
            <div class="col-12 col-md-6 col-lg-3 info-section">
                <ul>
                    <li>
                        <a href="missao.html" target="_blank">{"Sobre Nós"}</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">{"Oferta Formativa"}</a>
                    </li>
                    <li>
                        <a href="razoes-para-aprender-a-programar.html" target="_blank">{"Blog"}</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">{"FAQ"}</a>
                    </li>
                </ul>
                <br />
                <ul class="infos">
                    <li class="title">
                        <strong>{"Informações"}</strong>
                    </li>
                    <li>
                        <a href="politica-de-privacidade.html" target="_blank">{pp}</a>
                    </li>
                    <li>
                        <a href="https://www.livroreclamacoes.pt/INICIO/" target="_blank">{livrorec}</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3 info-section">
                <ul>
                    <li class="title">
                        <strong>Redes Sociais</strong>
                    </li>
                    <a href="https://www.facebook.com/coders.school.pt/" target="_blank"><img class="social-media-icon" src={facebook} /></a>
                    <a href="https://www.instagram.com/coders.school.pt/" target="_blank"><img class="social-media-icon" src={instagram} /></a>
                    <a href="https://www.tiktok.com/@coders.school.pt" target="_blank"><img class="social-media-icon" src={tiktok} /></a>
                    <a href="https://www.threads.net/@coders.school.pt" target="_blank"><img class="social-media-icon" src={threads} /></a>
                </ul>
            </div>
        </div>
        
        <div class="row mt-5">
            <div class="col text-center direitos">
                <small>{name}</small>
            </div>
        </div>
    </div>
</footer>
  );
}

export default Footer;
