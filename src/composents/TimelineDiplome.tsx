
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

interface DiplomeItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

interface TimelineDiplomeProps {
    items: DiplomeItem[];
}

const TimelineDiplome: React.FC<TimelineDiplomeProps> = ({ items }) => {

    const customizedMarker = (item: DiplomeItem) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: DiplomeItem) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                {item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.image} width={200} className="shadow-1" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
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
