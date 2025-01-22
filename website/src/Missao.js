import React from 'react';

function Missao() {
  return (
    <main className="main-content" id="missao">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-xxl-8 offset-xxl-1">
            <h1 align="justify">/Missão</h1>
            <p className="missao-sentence">
              Ajudar-te a integrar a próxima geração de coders.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-xxl-4 offset-xxl-1">
            <img id="missao-img" src="assets/join_us.png" alt="Imagem da Missão" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-xxl-12 offset-xxl-1 content">
            <p>
              <strong>
                <span style={{ fontSize: '20px' }} className="faixas">
                  Inteligência Artificial? Segurança Informática? Robótica? Realidade Virtual? Metaverse? Blockchain?
                </span>
              </strong>
              De certeza que já ouviste estes termos por aí… Nem que seja nas notícias! Na{' '}
              <strong>
                <span className="rose" style={{ fontSize: '20px' }}>
                  coders
                </span>
              </strong>{' '}
              damos-te as bases de programação necessárias para começares a explorar os diferentes submundos da tecnologia (quem sabe até dentro da sala de aula!).
            </p>

            <p>
              Porquê que na coders achamos importante que todos aprendam o{' '}
              <strong>
                <span className="green" style={{ fontSize: '20px' }}>
                  skill do futuro
                </span>
              </strong>
              ? Pelas seguintes <strong><span style={{ fontSize: '20px' }}>12</span></strong> razões:
            </p>
          </div>
          {/* Continue a conversão para o restante do conteúdo seguindo o mesmo padrão */}
        </div>
      </div>
    </main>
  );
}

export default Missao;
