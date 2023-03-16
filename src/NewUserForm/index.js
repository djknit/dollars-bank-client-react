import { useState } from 'react';
import Form from '../Form';

function NewUserForm({
    isVisible
}) {
    const [username, setUsername] = useState('');
    const [legalName, setLegalName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [dob, setDob] = useState('');

    return !isVisible ? (
        <></>
    ) : (
        <Form heading='New User Sign-Up'>
            
        </Form>
    );
}

export default NewUserForm;
