import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { AuthenticationContext } from '../../service/context/Token';
import { useContext } from 'react';

function Profile() {

    const { user, userGoogle, check } = useContext(AuthenticationContext);

    if (check === 'google') {
        return (
            <Container fluid style={{ display: "flex", justifyContent: "center", height: "100vh", backgroundColor: "var(--lilás)" }}>
                <Row className='box-profile'>
                    <Col sm={4} className='avatar-box'>
                        <div className='avatar'>
                            <img src={userGoogle.picture}></img>
                        </div>
                    </Col>
                    <Col sm={8} className='box-info'>
                        <div className='box-card'>
                            <div className='card'>
                                <text className='info'>{userGoogle.name} </text>
                            </div>
                            <div className='card'>
                                <text className='info'>{userGoogle.email}</text>
                            </div>
                            <div className='card'>
                                <text className='info'>{user.linkedin}</text>
                            </div>
                            <div className='card'>
                                <text className='info'>{user.github}</text>
                            </div>
                        </div>
                        <button className='pw-btn'> alterar senha</button>
                    </Col>

                </Row>
            </Container>
        );
        
    } else {
        return (
            <Container fluid style={{ display: "flex", justifyContent: "center", height: "100vh", backgroundColor: "var(--lilás)" }}>
                <Row className='box-profile'>
                    <Col sm={4} className='avatar-box'>
                        <div className='avatar'>
                            <img src="https://th.bing.com/th/id/OIP.iQQGIDRpOQ8bqCDbwgsG2AHaFg?w=270&h=201&c=7&r=0&o=5&dpr=1.1&pid=1.7"></img>
                        </div>
                    </Col>
                    <Col sm={8} className='box-info'>
                        <div className='box-card'>
                            <div className='card'>
                                <text className='info'>{user.name} </text>
                            </div>
                            <div className='card'>
                                <text className='info'>{user.email}</text>
                            </div>
                            <div className='card'>
                                <text className='info'>{user.linkedin}</text>
                            </div>
                            <div className='card'>
                                <text className='info'>{user.github}</text>
                            </div>
                        </div>
                        <button className='pw-btn'> alterar senha</button>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default Profile;