import React from 'react';
import "primereact/resources/themes/soho-dark/theme.css"
import "/node_modules/primeflex/primeflex.css"
import logo from './logo.svg';
import './App.css';
import Header from './composents/Header';
import CardList from './composents/CardList';

function App() {
  const cardData = [
    { title: 'Compétences', content: 'Développement Web, JavaScript, React, Node.js' },
    { title: 'Expérience', content: '4 ans en développement, gestion de projets' },
    { title: 'Formation', content: 'Master en informatique, diverses certifications' }
  ];
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <CardList items={cardData} />
      </div>
    </div>
  );
}

export default App;
