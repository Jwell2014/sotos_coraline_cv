import React from 'react';
import './styles/App.css';
import Header from './composents/Header';
import CardList from './composents/CardList';
import { cardData } from './data/card';
import { diplome } from './data/diplome';
import 'primereact/resources/themes/soho-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import TimelineDiplome from './composents/TimelineDiplome';

const App: React.FC = () => {
  return (
    <div>
      <div>
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