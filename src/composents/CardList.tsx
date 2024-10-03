import React from 'react';
import Card from './Card';

interface CardItem {
    title: string;
    content: string;
}

interface CardListProps {
    items: CardItem[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
    return (
        <div className="flex flex-wrap justify-content-between">
            {items.map((item, index) => (
                <Card key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default CardList;
