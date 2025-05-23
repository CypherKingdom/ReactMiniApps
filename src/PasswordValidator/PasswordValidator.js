import { useState } from "react";
import validator from "validator";

function PasswordValidator() {
    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            <div>
                <h2>Check Password Strength</h2>
                <span>Enter Password: </span><input type="text"
                    onChange={(e) => validate(e.target.value)}></input> <br />
                {errorMessage === '' ? null :
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorMessage}</span>}
            </div>
        </div>
    );
}

export default PasswordValidator;