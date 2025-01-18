import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from './composents/Header';
import CardList from './composents/CardList';
import { cardData } from './data/card';
import { diplomes } from './data/diplome';
import { experiences } from './data/experience';
import 'primereact/resources/themes/soho-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import TimelineDiplome from './composents/TimelineDiplome';
import { Button } from 'primereact/button';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(Boolean);
  const [items, setItems] = useState([{}]);
  const [onClickValue, setOnClickValue] = useState("");
  console.log("ok" + onClickValue);
  console.log("ok" + isOpen);



  // Contrôler les changements liés à onClickValue
  useEffect(() => {
    if (onClickValue === "Diplômes & Formations") {
      setIsOpen(true);
      setItems(diplomes);
    } else if (onClickValue === "Expériences Professionnelles") {
      setIsOpen(true);
      setItems(experiences);
    } else if (onClickValue === "En Savoir Plus") {
      setIsOpen(true);
      setItems([{}]);
    } else {
      setIsOpen(false);
    }
  }, [onClickValue]);

  const handleClose = () => {
    setIsOpen(false);
    setOnClickValue(""); // Réinitialise onClickValue pour permettre un reclique
  };

  return (
    <div>
      <div>
        <Header onClickValue={setOnClickValue} />

      </div>
      <div className={isOpen ? "" : "hidden"} >
        <div className="flex justify-content-end  mb-3 px-4 py-2">
          <Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Cancel" onClick={handleClose} />
        </div>
        <TimelineDiplome items={items} />
      </div>
      <div>
        <CardList items={cardData} />
      </div>
    </div>
  );
};

export default App;