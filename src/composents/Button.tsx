import React from 'react';

interface ButtonProps {
    onClick: () => void;
    classElem?: string;
    label: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, classElem, label, disabled = false }) => {
    return (
        <button className={classElem && classElem} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;