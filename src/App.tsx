import React from 'react';
import "primereact/resources/themes/soho-dark/theme.css"
import "/node_modules/primeflex/primeflex.css"
import logo from './logo.svg';
import './App.css';
import Header from './composents/Header';
import CardList from './composents/CardList';
import { Image } from 'primereact/image';
import ImgProfil from './assets/coraline_mini.jpg'

function App() {
  const cardData = [
    { title: 'Langages de programmation', content: ['JavaScript', 'Java'] },
    { title: 'Frameworks et bibliothèques ', content: ['React', 'Node.js', 'Next.js', 'Express.js', 'Tailwind CSS'] }
  ];
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-content-start">
        <Image src={ImgProfil} alt="Coraline" />
        <CardList items={cardData} />
      </div>
    </div>
  );
}

export default App;
