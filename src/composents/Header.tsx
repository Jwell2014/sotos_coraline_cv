import React from 'react';
import { Image } from 'primereact/image';
import imgProfil from '../assets/profilCv.svg';


const Header: React.FC = () => {
    return (
        <div className="flex justify-content-start">
            <Image className='ml-8 mt-5 w-5' src={imgProfil} />

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
            </header >
        </div>

    );
};

export default Header;