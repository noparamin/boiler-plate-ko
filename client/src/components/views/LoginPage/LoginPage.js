import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Button from "../../button/Button";

function LoginPage(props) {
    const formStyle = {
        background: "transparent",
        border: "none",
        borderBottom: "solid 1px #ccc",
        paddingTop: "15px" 
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        };

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    navigate('/');
                } else {
                    alert('Error');
                }
            });

        

    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                
                <input style={formStyle} placeholder="Email" type="email" value={Email} onChange={onEmailHandler} />
                
                <input style={formStyle} placeholder="password" type="password" value={Password} onChange={onPasswordHandler} />

                <br/>
                <Button text="Login"/>
            </form>
        </div>
    );
}

export default LoginPage;