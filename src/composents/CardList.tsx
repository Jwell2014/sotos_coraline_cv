import React from 'react';
import Card from './Card';

interface CardListProps {
    items: { title: string; content: string[] }[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
    return (
        <div className="flex">
            {items.map((item: { title: string; content: string[] }, index) => (
                <Card key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default CardList;
