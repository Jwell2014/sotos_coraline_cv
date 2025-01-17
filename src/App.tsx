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
import SelectedButton from './composents/Button';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClickSelectButton = (e: { target: { value: string; }; }) => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <CardList items={cardData} />
      </div>
      <div className='my-6 flex justify-content-center'>
        <SelectedButton classElem='mx-5' icon='pi pi-graduation-cap' label='Diplômes & Formations' onClick={(event: { target: { value: string; }; }) => onClickSelectButton(event)} />
        <SelectedButton classElem='mx-5' icon='pi pi-briefcase' label='Expériences Professionnelles' onClick={(event: { target: { value: string; }; }) => onClickSelectButton(event)} />
        <SelectedButton classElem='mx-5' icon='pi pi-plus-circle' label='En Savoir Plus' onClick={(event: { target: { value: string; }; }) => onClickSelectButton(event)} />

      </div>
      <div className={isOpen ? "" : "hidden"} >
        <TimelineDiplome items={diplome} />
      </div>
    </div>
  );
};

export default App;