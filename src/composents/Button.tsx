import React from 'react';

interface ButtonProps {
    onClick: () => void;
    classElem?: string;
    label: string;
    disabled?: boolean;
    icon: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, classElem, label, disabled = false, icon }) => {
    return (
        <button className={classElem && classElem} onClick={onClick} disabled={disabled}>
            {icon && <i className={icon} />}
            {<span className='mx-2'>{label}</span>}
        </button>
    );
};

export default Button;