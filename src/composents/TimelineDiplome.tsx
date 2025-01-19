
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';

interface Item {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    poste?: string;
    periode?: string;
    entreprise?: string;
    description?: string[];
    realisations?: string[];
    organization?: string;
    equivalent?: string;
}

interface TimelineDiplomeProps {
    items: Item[];
}

const TimelineDiplome: React.FC<TimelineDiplomeProps> = ({ items }) => {

    const customizedMarker = (item: Item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: Item) => {
        return (

            <Card className='border-3' style={{ borderColor: item.color }} title={item.status ? item.status : item.poste} subTitle={item.date}>
                {item.icon && <i className={item.icon}></i>}
                {item.entreprise && <p className='font-bold'>{item.entreprise}</p>}
                {item.organization && <p className="font-bold">{item.organization}</p>}
                {item.equivalent && <p className="font-bold">{item.equivalent}</p>}

                {item.description &&
                    <>
                        <p className='underline'>Description</p>
                        <ul>
                            {item.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </>
                }
                {item.realisations &&
                    <>
                        <p className='underline'>Réalisations</p>
                        <ul>
                            {item.realisations.map((real, index) => (
                                <li key={index}>{real}</li>
                            ))}
                        </ul>
                    </>
                }
            </Card>
        );
    };

    return (
        <>
            {/* Timeline pour les moyens et grands écrans */}
            <div className="hidden sm:block">
                <div className="card mb-8">
                    <Timeline value={items} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                </div>
            </div>

            {/* Liste simple pour les petits écrans */}
            <div className="block sm:hidden">
                <div className="flex flex-column gap-4">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            className="border-3 w-full"
                            style={{ borderColor: item.color }}
                            title={item.status ? item.status : item.poste}
                            subTitle={item.date}
                        >
                            {item.entreprise && <p className="font-bold">{item.entreprise}</p>}
                            {item.organization && <p className="font-bold">{item.organization}</p>}
                            {item.equivalent && <p className="font-bold">{item.equivalent}</p>}

                            {item.description &&
                                <>
                                    <p className='underline'>Description</p>
                                    <ul>
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </>
                            }
                            {item.realisations &&
                                <>
                                    <p className='underline'>Réalisations</p>
                                    <ul>
                                        {item.realisations.map((real, i) => (
                                            <li key={i}>{real}</li>
                                        ))}
                                    </ul>
                                </>
                            }
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TimelineDiplome;