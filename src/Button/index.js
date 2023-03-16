import './index.css';

function Button({
    action,
    children,
    isActive
}) {
    let btnClass = "Button";
    if (isActive) btnClass += ' is-active';

    return (
        <button onClick={action} className={btnClass}>
            {children}
        </button>
    );
}

export default Button;
