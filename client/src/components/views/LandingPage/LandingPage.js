import React, {useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from "../../button/Button";

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('/api/hello')
        .then(response => console.log(response.data));
    }, []);

    const onClickLogin = () => {
        console.log("login 페이지로");
        navigate("/login");
    };

    const onClickRegister = () => {
        navigate("/register");
    };

    const onClickHandler = () => {
        axios.get(`/api/users/logout`).then(response => {
            if(response.data.success) {
                navigate('/login');
            } else {
                alert("로그아웃 실패");
            }
        });
    };

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
            <Button text="로그인" onClick={onClickLogin}/>
            <Button text="회원가입" onClick={onClickRegister}/>
            <Button text="로그아웃" onClick={onClickHandler}/>
        </div>
    );
}

export default LandingPage
