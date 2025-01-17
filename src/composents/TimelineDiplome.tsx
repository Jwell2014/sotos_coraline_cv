
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
            <Card title={item.status ? item.status : item.poste} subTitle={item.date}>
                {item.icon && <i className={item.icon}></i>}
                {item.entreprise && <p className='font-bold'>{item.entreprise}</p>}

                {item.description &&
                    <>
                        <p>Description</p>
                        <ul>
                            {item.description.map((desc, index) => (
                                <ol key={index}>{desc}</ol>
                            ))}
                        </ul>
                    </>
                }
                {item.realisations &&
                    <>
                        <p>Réalisations</p>
                        <ul>
                            {item.realisations.map((real, index) => (
                                <ol key={index}>{real}</ol>
                            ))}
                        </ul>
                    </>
                }
            </Card>
        );
    };

    return (
        <div className="card">
            <Timeline value={items} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}

export default TimelineDiplome;