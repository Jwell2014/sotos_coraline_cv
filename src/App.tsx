// App.tsx
import React from 'react';
import Header from './composents/Header';
import { Image } from 'primereact/image';
import CardList from './composents/CardList';
import { cardData } from './data/card';
import { diplome } from './data/diplome';
import 'primereact/resources/themes/soho-dark/theme.css';  // Thème de PrimeReact
import 'primereact/resources/primereact.min.css';  // Styles principaux de PrimeReact
import 'primeflex/primeflex.css';  // PrimeFlex
import imgProfil from './assets/profilCv.svg';
import TimelineDiplome from './composents/TimelineDiplome';

const App: React.FC = () => {
  return (
    <div>
      <div className="flex justify-content-start">
        <Image className='ml-8 mt-5 w-5' src={imgProfil} />
        <Header />
      </div>
      <div>
        <CardList items={cardData} />
      </div>
      <div className='my-6'>
        <TimelineDiplome items={diplome} />
      </div>


    </div>
  );
};

export default App;
