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
        <div style={{ overflowX: 'hidden' }}>
            {/* Première ligne : 4 cartes */}
            <div className="flex flex-wrap justify-content-between gap-2">
                {items.slice(0, 4).map((item, index) => (
                    <div
                        key={`item-${index}`}
                        className="flex-grow-1"
                        style={{
                            flex: '1 1 calc(25% - 0.5rem)', // Chaque carte occupe 25% avec un petit écart
                            maxWidth: 'calc(25% - 0.5rem)', // Fixe une largeur maximale à 25%
                        }}
                    >
                        <div className="p-1 bg-primary font-bold border-round">
                            <Accordion>
                                <AccordionTab
                                    header={
                                        <span className="flex align-items-start gap-1">
                                            <span className="font-bold white-space-nowrap">{item.title}</span>
                                        </span>
                                    }
                                >
                                    <ul className="m-0">
                                        {item.content.map((content, idx) => (
                                            <li key={`content-${index}-${idx}`} className="mb-0">
                                                {content}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                ))}
            </div>

            {/* Deuxième ligne : 1 carte de 3 colonnes + 1 carte de 9 colonnes */}
            <div className="flex flex-wrap justify-content-start gap-2 mt-4">
                {/* Première carte : 3 colonnes */}
                {items[4] && (
                    <div
                        key="item-4"
                        style={{
                            flex: '1 1 calc(25% - 0.5rem)', // Occupe 25% de la largeur
                            maxWidth: 'calc(25% - 0.5rem)',
                        }}
                    >
                        <div className="p-1 bg-primary font-bold border-round">
                            <Accordion>
                                <AccordionTab
                                    header={
                                        <span className="flex align-items-start">
                                            <span className="font-bold white-space-nowrap">{items[4].title}</span>
                                        </span>
                                    }
                                >
                                    <ul className="m-0">
                                        {items[4].content.map((content, idx) => (
                                            <li key={`content-4-${idx}`} className="mb-0">
                                                {content}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                )}

                {/* Deuxième carte : 9 colonnes */}
                {items[5] && (
                    <div
                        key="item-5"
                        style={{
                            flex: '1 1 calc(75% - 0.5rem)', // Occupe 75% de la largeur
                            maxWidth: 'calc(75% - 0.5rem)',
                        }}
                    >
                        <div className="p-1 bg-primary font-bold border-round">
                            <Accordion>
                                <AccordionTab
                                    header={
                                        <span className="flex align-items-start gap-1">
                                            <span className="font-bold white-space-nowrap">{items[5].title}</span>
                                        </span>
                                    }
                                >
                                    <ul className="m-0">
                                        {items[5].content.map((content, idx) => (
                                            <li key={`content-5-${idx}`} className="mb-0">
                                                {content}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardList;