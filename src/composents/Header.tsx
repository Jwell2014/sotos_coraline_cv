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
        link.href = '/SOTOS_C_CV.pdf';
        link.download = 'SOTOS_C_CV.pdf';
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
        <>
            <div className="flex flex-column md:flex-row justify-content-around align-items-center px-4 pt-6">
                {/* Section de gauche : Image et bouton */}
                <div className="flex flex-column align-items-center md:mb-0 md:pr-6">
                    <Image src={imgProfil} className="max-w-full h-auto mt-4 mb-2" alt="Profil" />

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
                            Développeuse Full-Stack
                        </h1>

                    </header>
                    {/* Déplacer le bouton uniquement sur petits écrans */}
                    {isSmallScreen && (
                        <SelectedButton
                            icon="pi pi-upload"
                            classElem="-mt-6 mb-6 w-full"
                            label="Télécharger le CV"
                            onClick={() => downloadCv()}
                        />
                    )}

                </div>
            </div>
            <div className="flex flex-wrap justify-content-around gap-3 w-full px-4">
                {!isSmallScreen && (
                    <SelectedButton
                        icon="pi pi-upload"
                        classElem='mx-5'
                        label="Télécharger le CV"
                        onClick={() => downloadCv()}
                    />
                )}
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
        </>
    );

}


export default Header;