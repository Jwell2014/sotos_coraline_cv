import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex flex-column justify-content-start w-screen">
            <h1 className="m-0 text-8xl font-bold text-white" style={{ letterSpacing: '2rem' }}>
                CONCEPTEUR
            </h1>
            <h1 className="m-0 text-8xl font-bold text-white" style={{ letterSpacing: '2rem' }}>
                DÉVELOPPEUR
            </h1>
            <h1 className="m-0 text-7xl font-bold text-white" style={{ letterSpacing: '2rem' }}>
                D'APPLICATIONS
            </h1>
            <h1 className="mt-0 text-6xl font-bold text-white" style={{ wordSpacing: '0.5rem', letterSpacing: '0.5rem' }}>
                EN ENVIRONNEMENT DEVOPS
            </h1>
        </header >

    );
};

export default Header;