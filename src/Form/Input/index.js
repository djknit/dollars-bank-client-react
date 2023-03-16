function Input({
    placeholder,
    name,
    label,
    hasProblem,
    isDisabled,
    formId,
    value,
    setValue
}) {
    const inputId = `${formId}-${name}-input`;
    return (
        <>
            <label htmlFor={inputId}>
                {label}
            </label>
            <input
                placeholder={placeholder}
                id={inputId}
                onChange={(event) => setValue(event.currentTarget.value)}
                value={value}
                className={'Input ' + (hasProblem ? 'has-problem' : '')}
                disabled={isDisabled}
            />
        </>
    ); 
}

export default Input;