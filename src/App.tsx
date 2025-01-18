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
import SelectedButton from './composents/Button';
import { Dialog } from 'primereact/dialog';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(Boolean);
  const [items, setItems] = useState([{}]);
  const [onClickValue, setOnClickValue] = useState("");
  const [visible, setVisible] = useState<boolean>(false);




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
          <Button icon="pi pi-times" rounded outlined severity="info" aria-label="Cancel" onClick={handleClose} />
        </div>
        <TimelineDiplome items={items} />
      </div>
      <div className='px-4 py-6'>
        <CardList items={cardData} />
      </div>
      <div className='flex justify-content-evenly'>
        <SelectedButton icon="pi pi-linkedin" classElem="mt-5" label="LinKedin" onClick={() => window.open('https://www.linkedin.com/in/coraline-sotos-72bb7512a/', '_blank')} />
        <SelectedButton icon="pi pi-github" classElem="mt-5" label="GitHub" onClick={() => window.open('https://github.com/Jwell2014', '_blank')} />
        <SelectedButton icon="pi pi-folder" classElem="mt-5" label="PorteFolio" onClick={() => setVisible(true)} />

      </div>
      <div className="card flex justify-content-center">
        <Dialog header="✨ Mon Portfolio est en Construction ! ✨" visible={visible} style={{ width: '60vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
          <p className="m-0">
            Bonjour et merci pour votre visite !<br /><br />
            Je travaille actuellement à la création d’un portfolio qui mettra en lumière mes compétences, mes projets et mes réalisations.<br />
            Ce sera un espace unique où vous pourrez découvrir mon travail sous son meilleur jour. 🌟<br /><br />
            Le portfolio sera bientôt prêt, alors restez à l’écoute ! En attendant, n’hésitez pas à me contacter si vous souhaitez en savoir plus sur mes projets ou collaborer avec moi. 🙌<br /><br />
            Merci pour votre patience et votre compréhension ! 😊
          </p>
        </Dialog>
      </div>
    </div>
  );
};

export default App;