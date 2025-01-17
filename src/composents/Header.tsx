import React from 'react';
import { Image } from 'primereact/image';
import imgProfil from '../assets/profilCv.svg';
import Button from './Button';


const Header: React.FC = () => {

    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = '/SOTOSCoralineCv.pdf';
        link.download = 'SOTOSCoralineCv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className="flex flex-column md:flex-row justify-content-center align-items-center px-4 py-6">
            {/* Section de gauche : Image et bouton */}
            <div className="flex flex-column align-items-center mb-6 md:mb-0 md:pr-6">
                <Image src={imgProfil} className="max-w-full h-auto" alt="Profil" />
                <Button
                    icon="pi pi-upload"
                    classElem="bg-gray-900 mt-4 py-2 px-3"
                    label="Télécharger le CV"
                    onClick={downloadCv}
                />
            </div>

            {/* Section de droite : Titre */}
            <header className="flex flex-column justify-content-start align-items-start text-start w-full">
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
        </div>
    );

}


export default Header;