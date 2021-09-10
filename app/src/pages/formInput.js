import { React } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import ReactJsonForm from '../components/reactJsonSchema';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'




function FormInput() {


    const jsonHistoryReturn = JSON.parse(localStorage.getItem("formHistory"))

    const homepageForm = {
        key: 'homepage',
        description: "Select and complete",
        type: "object",
        properties: {
            name: { type: "string", title: "Name" },
            age: { type: "number", title: "Age" },
            address: { type: "string", title: "Address" },
            state: { type: "string", title: "State" },
        }
    };

    return (
        <>
            <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Form Creation</Card.Title>
                        <ReactJsonForm schema={homepageForm}
                            onSubmit={(form) => {
                                localStorage.setItem('formHistory', JSON.stringify(form.formData));
                            }}
                            onLoad={() => {
                                console.log(jsonHistoryReturn)
                                return jsonHistoryReturn;
                            }}/>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Col> <Link to="/"><Button> Return Home </Button></Link></Col>
                <Col> <Link to="/finshedDoc"><Button> Finished Doc </Button></Link> </Col>
            </Row>
        </>
    )
};


export default FormInput;