import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Button from "../../button/Button";

function RegisterPage(props) {
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
    const [Name, setName] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인이 같아야합니다.")
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        };

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success) {
                    alert("회원가입 완료!")
                    navigate("/login");
                } else {
                    alert('회원가입 실패');
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

                <input style={formStyle} placeholder="Name" type="text" value={Name} onChange={onNameHandler} />

                <input style={formStyle} placeholder="Password" type="password" value={Password} onChange={onPasswordHandler} />
                
                <input style={formStyle} placeholder="Confirm Password" type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br/>
                <Button text="회원가입" />
            </form>
        </div>
    );
}

export default RegisterPage;