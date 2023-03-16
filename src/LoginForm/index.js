import Form from '../Form';

function LoginForm({ isVisible }) {

    return isVisible ? (
        <Form heading='Login'>
            <input></input>
        </Form>
    ) : (
        <></>
    );
}

export default LoginForm;
