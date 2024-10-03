// App.tsx
import React from 'react';
import Header from './composents/Header';
import { Image } from 'primereact/image';
import CardList from './composents/CardList';
import { cardData } from './data/card';
import 'primereact/resources/themes/soho-dark/theme.css';  // Thème de PrimeReact
import 'primereact/resources/primereact.min.css';  // Styles principaux de PrimeReact
import 'primeflex/primeflex.css';  // PrimeFlex
import imgProfil from './assets/coraline_mini.jpg';

const App: React.FC = () => {
  return (
    <div>
      <div className="flex justify-content-end">
        <Header />

        <CardList items={cardData} />
        <Image src={imgProfil} />
      </div>
    </div>
  );
};

export default App;
