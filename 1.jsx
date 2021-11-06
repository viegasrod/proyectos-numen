import React, {Fragment} from 'react';
import Bariloche from '../images/Bariloche.jpg';
import Cataratas from '../images/Cataratas.jpg';
import Salta from '../images/Salta.jpg';
import Madryn from '../images/Madryn.jpg';
import {Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
// import axios from 'axios';


const styles = {
    paquete: {
        backgroundColor: "#F7F5F0",
        borderRadius: "10px",
        borderColor: "black",
        gap: "2em",
        textAlign: "center",
        overflow: "hidden",
        marginRight: "20px",
        paddingLeft: "0",
        paddingRight: "0",
        paddingBottom: "30px",

    },

    img: {
        margin: "0",
        padding: "0", 
        width: "100%",
        height: "160px",
    },
}

const Paquetes =() => {

    return (
 <Fragment>
    <Container fluid className="mt-4">
        <Row>
        <Col  className="ms-4 border" style={styles.paquete}> 
            <img style={styles.img} className="img" alt="Bariloche" src={Bariloche}></img>
            <h3>Bariloche</h3>
             <p>4 días 3 noches</p>
             <h4> $50000</h4>

             <Button
             variant="primary"
             size="lg"
             className = "Button mt-4"
             >Comprar</Button>
        </Col>
        
        <Col className="ms-4 border" style={styles.paquete}>
            <img style={styles.img} className="img" alt="Cataratas" src={Cataratas}></img>
            <h3>Cataratas del Iguazú</h3>
             <p>4 días 3 noches</p>
             <h4> $45000</h4>
             <Button
             variant="primary" 
             size="lg"
             className = "Button mt-4"
             >Comprar</Button>
        </Col>        

        <Col className="ms-4 border" style={styles.paquete}>
            <img style={styles.img} className="img" alt="Salta" src={Salta}></img>
            <h3>Salta y Jujuy</h3>
             <p>8 días 7 noches</p>
             <h4> $80000</h4>
             <Button
             variant="primary"
             size="lg"
             className = "Button mt-4"
             >Comprar</Button>
        </Col>
       
        <Col className="ms-4 border" style={styles.paquete}>
            <img style={styles.img} className="img" alt="Madryn" src={Madryn}></img>
            <h3>Puerto Madryn</h3>
             <p>6 días 5 noches</p>
             <h4> $60000</h4>
             <Button
             variant="primary"
             size="lg"
             className = "Button mt-4"
             >Comprar</Button>
        </Col>
    </Row>
            
    </Container>
</Fragment>
)
    }




export default Paquetes