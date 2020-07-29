import React from 'react';
import Menu from './components/Menu/Menu';
import dadosiniciais from "./data/dados_iniciais.json";
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "#414141"}}>
      <Menu />
      <BannerMain
        videoTitle={dadosiniciais.categorias[0].videos[0].titulo}
        url={dadosiniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-ent?"}
      />
      <Carrousel ignoreFirstVideo category={dadosiniciais.categorias[0]}/>
      <Carrousel  category={dadosiniciais.categorias[1]}/>
      <Carrousel  category={dadosiniciais.categorias[2]}/>
      <Carrousel  category={dadosiniciais.categorias[3]}/>
      <Carrousel  category={dadosiniciais.categorias[4]}/>
      <Carrousel  category={dadosiniciais.categorias[5]}/>
      <Footer/>
    </div>
  );
}

export default App;
