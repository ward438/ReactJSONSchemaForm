import { React } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import FinishedJsonForm from '../components/finishedJsonForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'




function CompleteForm() {

    let jsonHistoryReturn = JSON.parse(localStorage.getItem("formHistory"))  

    const returnJsonForm = {
        key: 'homepage',
        description: "Completed",
        type: "object",
        properties: {
            name: { type: "string", title: "Name" },
            age: { type: "number", title: "Age" },
            address: { type: "string", title: "Address" },
            state: { type: "string", title: "State" },
        }
    }




    return (
        <>
            <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Completed Form</Card.Title>
                        <FinishedJsonForm schema={returnJsonForm}                           
                            onLoad={() => {
                                console.log(jsonHistoryReturn)
                                return jsonHistoryReturn;
                            }}/>
                    </Card.Body>
                </Card>
            </Row>            
            <Row>
                <Col> <Link to="/"><Button> Return Home </Button></Link></Col>
                <Col> <Link to="/sampleForms"><Button> Back </Button></Link> </Col>
            </Row>
        </>
    )
};


export default CompleteForm;