import './index.css';
import Input from './Input';

function Form({
    formId,
    heading,
    children,
    inputs
}) {



    return (
        <form id={formId} className="Form fade-in">
            <h3 className='form-heading'>{heading}</h3>
            {children}
            {/* {inputs.map(({ name, initialValue, placeholder, label,  }) => (
                <Input
                    {...{
                        name,
                        label,
                        placeholder
                    }}
                    value={initialValue}
                    setValue={(val) => {}}
                />
            ))} */}
        </form>
    );
}

export default Form;
