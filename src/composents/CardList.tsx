// CardList.tsx
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

interface CardItem {
    title: string;
    content: string[];
}

interface CardListProps {
    items: CardItem[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
    return (
        <>
            <div className="card flex flex-row">
                {items.map((item, index) => (
                    <Accordion>
                        <AccordionTab
                            header={
                                <span className="flex align-items-center gap-2 w-full">
                                    <span className="font-bold white-space-nowrap">{item.title}</span>
                                </span>
                            }
                        >
                            <ul className="m-0">
                                {item.content.map((content, index) => (
                                    <li key={index} className="mb-1">
                                        {content}
                                    </li>
                                ))}
                            </ul>
                        </AccordionTab>
                    </Accordion>
                ))}

            </div>
        </>
    );
};

export default CardList;
