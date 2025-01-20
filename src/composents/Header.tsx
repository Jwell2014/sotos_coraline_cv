import React from 'react';
import { Image } from 'primereact/image';
import imgProfil from '../assets/profilCv.svg';
import SelectedButton from './Button';
import useMediaQuery from '../hooks/useMediaQuery';

interface HeaderProps {
    onClickValue: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<HeaderProps> = ({ onClickValue }) => {
    const isSmallScreen = useMediaQuery('(max-width: 768px)');


    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = '/SOTOSCoralineCv.pdf';
        link.download = 'SOTOSCoralineCv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const onClickSelectButton = (e: { target: { value: string; }; }) => {
        console.log(e.target.value);
        if (e.target.value === "Diplômes & Formations") {
            onClickValue(e.target.value);
        } else if (e.target.value === "Expériences Professionnelles") {
            onClickValue(e.target.value);
        } else {
            onClickValue(e.target.value)
        }
    }

    return (
        <div className="flex flex-column md:flex-row justify-content-around align-items-center px-4 py-6">
            {/* Section de gauche : Image et bouton */}
            <div className="flex flex-column align-items-center mb-3 md:mb-0 md:pr-6">
                <Image src={imgProfil} className="max-w-full h-auto mt-4" alt="Profil" />
                {!isSmallScreen && (
                    <SelectedButton
                        icon="pi pi-upload"
                        classElem=""
                        label="Télécharger le CV"
                        onClick={() => downloadCv()}
                    />
                )}
            </div>

            {/* Section de droite : Titre + bouton */}
            <div className="flex flex-column justify-content-start align-items-start md:justify-content-start md:align-items-start md:text-start w-full">
                <header className="flex flex-column justify-content-start align-items-start w-full mb-8 md:justify-content-start md:align-items-start md:text-start">
                    <h1
                        className="m-0 text-5xl md:text-7xl font-bold text-white break-words w-full"
                        style={{
                            letterSpacing: '0.2rem',
                        }}
                    >
                        CONCEPTEUR         DÉVELOPPEUR
                    </h1>

                    <h1
                        className="m-0 text-4xl md:text-6xl font-bold text-white break-words w-full"
                        style={{
                            letterSpacing: '0.15rem',
                        }}
                    >
                        D'APPLICATIONS
                    </h1>
                    <h1
                        className="m-0 text-4xl md:text-6xl font-bold text-white break-words w-full"
                        style={{
                            wordSpacing: '0.1rem',
                            letterSpacing: '0.15rem',
                        }}
                    >
                        EN ENVIRONNEMENT DEVOPS
                    </h1>

                </header>
                {/* Déplacer le bouton uniquement sur petits écrans */}
                {isSmallScreen && (
                    <SelectedButton
                        icon="pi pi-upload"
                        classElem="-mt-6 w-full"
                        label="Télécharger le CV"
                        onClick={() => downloadCv()}
                    />
                )}
                <div className="mt-7 flex flex-wrap justify-content-around gap-3 w-full">
                    <SelectedButton
                        classElem="flex-grow-1 sm:w-auto w-full toggle"
                        icon="pi pi-graduation-cap"
                        label="Diplômes & Formations"
                        onClick={(event: { target: { value: string } }) => onClickSelectButton(event)}
                    />
                    <SelectedButton
                        classElem="flex-grow-1 sm:w-auto w-full"
                        icon="pi pi-briefcase"
                        label="Expériences Professionnelles"
                        onClick={(event: { target: { value: string } }) => onClickSelectButton(event)}
                    />
                    <SelectedButton
                        classElem="flex-grow-1 sm:w-auto w-full"
                        icon="pi pi-plus-circle"
                        label="En Savoir Plus"
                        onClick={(event: { target: { value: string } }) => onClickSelectButton(event)}
                    />
                </div>

            </div>
        </div>
    );

}


export default Header;