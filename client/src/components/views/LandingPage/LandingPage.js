import React, {useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const btnStyle = {
        color: "white",
        background: "#6aafe6",
        border: "1px solid #6aafe6",
        borderRadius: ".25rem",
        marginTop: "10px"
    };

    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('/api/hello')
        .then(response => console.log(response.data));
    }, []);

    const onClickLogin = () => {
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
            <button style={btnStyle} onClick={onClickLogin}>로그인</button>
            <button style={btnStyle} onClick={onClickRegister}>회원가입</button>
            <button style={btnStyle} onClick={onClickHandler}>로그아웃</button>
        </div>
    );
}

export default LandingPage
