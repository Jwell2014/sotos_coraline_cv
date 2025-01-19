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
import { Fieldset } from 'primereact/fieldset';


const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(Boolean);
  const [items, setItems] = useState([{}]);
  const [onClickValue, setOnClickValue] = useState("");
  const [isPortfolioVisible, setPortfolioVisibility] = useState<boolean>(false);
  const [isContactVisible, setContactVisibility] = useState<boolean>(false);
  const [visibleContact, setVisibleContact] = useState<boolean>(false);





  // Contrôler les changements liés à onClickValue
  useEffect(() => {
    if (onClickValue === "Diplômes & Formations") {
      setIsOpen(true);
      setItems(diplomes);
      setVisibleContact(false);
    } else if (onClickValue === "Expériences Professionnelles") {
      setIsOpen(true);
      setItems(experiences);
      setVisibleContact(false);
    } else if (onClickValue === "En Savoir Plus") {
      setIsOpen(false);
      setOnClickValue("");
      setVisibleContact(true);
    } else {
      setIsOpen(false);
    }
  }, [onClickValue]);

  const handleClose = () => {
    setIsOpen(false);
    setOnClickValue(""); // Réinitialise onClickValue pour permettre un reclique
    setVisibleContact(false);
  };

  const legendTemplate = (
    <div className="flex align-items-center gap-2 px-2">
      <div className="m-0">
        <Button icon="pi pi-times" size="small" rounded outlined severity="info" aria-label="Cancel" onClick={handleClose} />
      </div>
      <span className="font-bold ml-3">En Savoir Plus</span>
    </div>
  );
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
      {visibleContact && (
        <>
          <div className="flex justify-content-center align-items-center w-full">
            <div className="card w-full p-4">
              <Fieldset
                className="flex flex-column justify-content-center align-items-center gap-6"
                legend={legendTemplate}
              >
                <div className="flex flex-wrap md:flex-nowrap gap-6 w-full">
                  {/* Première colonne */}
                  <div className="flex flex-column justify-content-start align-items-start w-full md:w-12 text-start">
                    <h4>À Propos De Moi</h4>
                    <p>
                      Développeuse full-stack spécialisée en Java et React, je possède une solide expertise dans la création
                      d'applications performantes et intuitives. Mon expérience inclut également le développement et l'intégration
                      de solutions utilisant l'intelligence artificielle pour optimiser les processus et améliorer les performances.
                      <br /><br />
                      Mon expérience m'a permis de maîtriser les bonnes pratiques Agile, en mettant l'accent sur la collaboration
                      et l'adaptabilité pour garantir le succès des projets.
                      <br /><br />
                      Passionnée par l'innovation, je m'efforce de concevoir des solutions sur mesure, alliant performance technique,
                      intelligence artificielle, et expérience utilisateur optimale. J'ai développé une aptitude à résoudre des
                      problématiques complexes grâce à une analyse approfondie et une gestion rigoureuse des projets.
                      <br /><br />
                      Avec une expérience significative en gestion de projets complexes, je suis capable de coordonner efficacement
                      des équipes multidisciplinaires, tout en respectant les délais et les exigences techniques. Ma créativité et
                      mes compétences techniques me permettent d'apporter des solutions novatrices adaptées aux besoins des entreprises.
                      <br /><br />
                      En veille constante sur les nouvelles technologies, y compris l'IA, je m'engage à rester à la pointe des outils
                      et des méthodologies pour offrir des solutions robustes, durables, et adaptées aux défis actuels.
                    </p>
                  </div>

                  {/* Deuxième colonne */}
                  <div className="flex flex-column justify-content-start align-items-start w-full md:w-6 text-start">
                    <h4 className="mb-4">Mes Hobbies</h4>
                    <ul className="list-none m-0 p-0">
                      {[
                        {
                          icon: "pi pi-desktop",
                          title: "Développement informatique",
                          description: "Explorer de nouvelles technologies, développer des projets et trouver des solutions créatives à des problématiques techniques.",
                        },
                        {
                          icon: "pi pi-headphones",
                          title: "Création musicale",
                          description: "Composer des morceaux, expérimenter de nouveaux styles et partager ma passion pour la musique.",
                        },
                        {
                          icon: "pi pi-flag",
                          title: "Sport",
                          description: "Maintenir un mode de vie actif avec des activités comme la randonnée, le fitness, ou des sports collectifs.",
                        },
                        {
                          icon: "pi pi-palette",
                          title: "Jeux de stratégie",
                          description: "Développer des compétences en résolution de problèmes et planification à travers des jeux captivants.",
                        },
                      ].map((hobby, index) => (
                        <li
                          key={index}
                          className="flex align-items-start gap-3 mb-3"
                          style={{
                            alignItems: "flex-start", // Assure un alignement parfait du texte et de l'icône
                          }}
                        >
                          <i
                            className={`${hobby.icon} text-primary text-2xl flex-shrink-0`}
                            style={{
                              minWidth: "2rem",
                              textAlign: "center",
                            }}
                          ></i>
                          <div>
                            <span className="font-bold block">{hobby.title}</span>
                            <span>{hobby.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </Fieldset>
            </div>
          </div>
        </>
      )
      }

      <div className='px-4 py-6'>
        <CardList items={cardData} />
      </div>
      <div className="flex flex-wrap justify-content-center gap-3 mx-4 mb-6">
        <SelectedButton
          icon="pi pi-linkedin"
          classElem="flex-grow-1 border-2 border-indigo-500 sm:w-auto w-full mt-5"
          label="LinkedIn"
          onClick={() => window.open('https://www.linkedin.com/in/coraline-sotos-72bb7512a/', '_blank')}
        />
        <SelectedButton
          icon="pi pi-github"
          classElem="flex-grow-1 border-2 border-cyan-500 sm:w-auto w-full mt-5"
          label="GitHub"
          onClick={() => window.open('https://github.com/Jwell2014', '_blank')}
        />
        <SelectedButton
          icon="pi pi-folder"
          classElem="flex-grow-1 border-2 border-purple-500 sm:w-auto w-full mt-5"
          label="PorteFolio"
          onClick={() => setPortfolioVisibility(true)}
        />
        <SelectedButton
          icon="pi pi-folder"
          classElem="flex-grow-1 border-2 border-blue-500 sm:w-auto w-full mt-5"
          label="Contact"
          onClick={() => setContactVisibility(true)}
        />
      </div>

      <div className="grid">
        <Dialog className='sm:w-8' header={isPortfolioVisible ? "Mon Portfolio est en Construction !" : "Contact"} visible={isPortfolioVisible || isContactVisible} onHide={() => {
          if (isPortfolioVisible) setPortfolioVisibility(false);
          if (isContactVisible) setContactVisibility(false);
        }}>
          {isPortfolioVisible && (
            <>
              <p className="m-0">
                Bonjour et merci pour votre visite !<br /><br />
                Je travaille actuellement à la création d’un portfolio qui mettra en lumière mes compétences, mes projets et mes réalisations.<br />
                Ce sera un espace unique où vous pourrez découvrir mon travail sous son meilleur jour. 🌟<br /><br />
                Le portfolio sera bientôt prêt, alors restez à l’écoute ! En attendant, n’hésitez pas à me contacter si vous souhaitez en savoir plus sur mes projets ou collaborer avec moi. 🙌<br /><br />
                Merci pour votre patience et votre compréhension ! 😊
              </p>
              <p>Envie de jeter un coup d'œil à l'avancement ?<br /> Découvrez une version préliminaire de mon portfolio en cliquant ci-dessous.</p>
              <SelectedButton icon="pi pi-eye" classElem="mt-5" label="Voir l'avancement" onClick={() => window.open('https://portfolio-tau-two-22.vercel.app/', '_blank')} />
            </>
          )}
          {isContactVisible && (
            <>
              <p className="m-0">
                Vous souhaitez me contacter pour discuter d’un projet, d’une collaboration ou simplement pour me dire bonjour ?<br />
                N’hésitez pas à m’envoyer un message en m’envoyant un e-mail à l’adresse suivante :<br /><br />
                <a
                  href="mailto:sotoscoraline@gmail.com"
                  className="text-primary underline hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sotoscoraline@gmail.com
                </a>
              </p>
              <p>Je vous répondrai dans les plus brefs délais !</p>
              <p>Vous pouvez également me contacter par téléphone au numéro suivant :</p>
              <p>
                <a
                  href="tel:+41778133367"
                  className="text-primary underline hover:underline"
                >
                  +41 77 813 33 67
                </a>
              </p>
            </>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default App;