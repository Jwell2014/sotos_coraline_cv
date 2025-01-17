
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';

interface DiplomeItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
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
                {item.icon && <i className={item.icon}></i>}
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
