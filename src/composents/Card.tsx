import React from 'react';
import { Card as PrimeCard } from 'primereact/card';

interface CardProps {
    title: string;
    content: string[];
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="p-2">
            <PrimeCard title={title} className="md:w-15rem">
                <ul className="m-0">
                    {content.map((item, index) => (
                        <li key={index} className="mb-1">
                            {item}
                        </li>
                    ))}
                </ul>
            </PrimeCard>
        </div>
    );
};

export default Card;