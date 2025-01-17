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
        <div className="flex justify-content-start">
            <div className='m-auto pr-8 text-center'>
                <Image src={imgProfil} />
                <Button icon="pi pi-upload" classElem='bg-gray-900 mt-4 py-2 px-3' label='Télécharger le CV' onClick={downloadCv} />
            </div>
            <header className="flex flex-column justify-content-start w-screen">
                <h1 className="m-0 text-8xl font-bold text-white" style={{ letterSpacing: '2rem' }}>
                    CONCEPTEUR
                </h1>
                <h1 className="m-0 text-8xl font-bold text-white" style={{ letterSpacing: '1.5rem' }}>
                    DÉVELOPPEUR
                </h1>
                <h1 className="m-0 text-7xl font-bold text-white" style={{ letterSpacing: '1.5rem' }}>
                    D'APPLICATIONS
                </h1>
                <h1 className="mt-2 text-6xl font-bold text-white" style={{ wordSpacing: '0.5rem', letterSpacing: '0.5rem' }}>
                    EN ENVIRONNEMENT DEVOPS
                </h1>
            </header>
        </div>

    );

}


export default Header;