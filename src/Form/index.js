import './index.css';

function Form({
    formId,
    heading,
    children
}) {

    return (
        <form id={formId} className="Form">
            <h3 className='form-heading'>{heading}</h3>
            {children}
        </form>
    );
}

export default Form;
