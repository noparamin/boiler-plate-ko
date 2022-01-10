import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import Button from "../../button/Button";
import styles from "../Input.module.css";

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
    const [fail, setFail] = useState(false);

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
                    if(fail === false){
                        setFail(!fail);
                        console.log(fail);
                    }
                }
            });

        

    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh', flexDirection: 'column'
        }}>
            
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                
                <input style={formStyle} className={styles.input} placeholder="Email" type="email" value={Email} onChange={onEmailHandler} />
                
                <input style={formStyle} className={styles.input} placeholder="password" type="password" value={Password} onChange={onPasswordHandler} />

                <br/>
                <Button text="Login"/>
            </form>
            {"\n"}
            <p style={{
                color: "red",
                fontSize: "5px",
                paddingTop: "10px"
            }}>{fail ? "아이디 또는 비밀번호가 잘못 입력 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요." : null}</p>
        </div>
    );
}

export default LoginPage;