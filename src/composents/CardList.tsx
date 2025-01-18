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
            <div className="grid">
                {items.slice(0, 4).map((item, index) => (
                    <div key={index} className="col-12 sm:col-6 lg:col-3 p-2">
                        <div className="border-2 border-primary border-round shadow-2">
                            <Accordion>
                                <AccordionTab header={item.title}>
                                    <ul>
                                        {item.content.map((content, idx) => (
                                            <li key={idx}>{content}</li>
                                        ))}
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                ))}
            </div>

            {/* Deuxième ligne : 1 carte de 3 colonnes + 1 carte de 9 colonnes */}
            <div className="grid">
                {/* Première carte : 3 colonnes */}
                {items[4] && (
                    <div key="item-4" className="col-12 sm:col-6 lg:col-3 p-2">
                        <div className="border-2 border-primary border-round shadow-2">
                            <Accordion>
                                <AccordionTab header={items[4].title}>
                                    <ul>
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
                    <div key="item-5" className="col-12 sm:col-6 lg:col-9 p-2">
                        <div className="border-2 border-primary border-round shadow-2">
                            <Accordion>
                                <AccordionTab header={items[5].title}>
                                    <ul>
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
        </div >
    );
};

export default CardList;