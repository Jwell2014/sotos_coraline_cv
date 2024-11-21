// App.tsx
import React from 'react';
import Header from './composents/Header';
import { Image } from 'primereact/image';
import CardList from './composents/CardList';
import { cardData } from './data/card';
import 'primereact/resources/themes/soho-dark/theme.css';  // Thème de PrimeReact
import 'primereact/resources/primereact.min.css';  // Styles principaux de PrimeReact
import 'primeflex/primeflex.css';  // PrimeFlex
import imgProfil from './assets/profilCv.svg';

const App: React.FC = () => {
  return (
    <div>
      <div className="flex justify-content-between">
        <Image className='mr-8 mt-5' src={imgProfil} />
        <Header />
        <CardList items={cardData} />
      </div>
      <h1>test commit</h1>
    </div>
  );
};

export default App;
