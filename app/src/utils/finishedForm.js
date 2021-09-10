import { React, ReactDOM } from 'react';
import '../index.css'
import ReactJsonForm from '../components/reactJsonSchema';
import ReactJsonFormTwo from '../components/reactJsonSchemaTwo'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'



function FinishedForm() {

    const Form = JSONSchemaForm.default;
    const schema = {
        type: "string"
    };
    const onSubmit = ({ formData }, e) => console.log("Data submitted: ", formData);
    
    React.createElement(Form, {
        schema: schema,
        onSubmit: onSubmit
    })

    return <Form schema={schema} onSubmit={onSubmit} />

}


export default FinishedForm;


