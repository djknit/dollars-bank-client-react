import React from 'react';
import './index.css';

function Button({
    action,
    children
}) {

    return (
        <button onClick={action} className="Button">
            {children}
        </button>
    );
}

export default Button;
