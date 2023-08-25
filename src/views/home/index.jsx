import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from '../../components/home/app-menu/index.jsx';

function Home() {

    const navigate = useNavigate();

    return (
        <Container >
            <Navbar/>
        </Container>
    );
}

export default Home;