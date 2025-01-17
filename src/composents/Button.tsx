import React, { useState } from 'react';
import { Button } from 'primereact/button';

interface ButtonProps {
    onClick: (e: { target: { value: string; }; }) => void;
    classElem?: string;
    label: string;
    disabled?: boolean;
    icon: string;
}

const SelectedButton: React.FC<ButtonProps> = ({ onClick, classElem, label, disabled = false, icon }) => {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);
        onClick({ target: { value: label, }, },);

        setTimeout(() => {
            setLoading(false);
        }, 500);
    };
    return (
        <>
            <Button size="large" className={classElem && classElem} label={label} outlined icon={icon} loading={loading} onClick={load} />
        </>
    );
};

export default SelectedButton;