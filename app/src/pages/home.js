import { React } from 'react';
import '../index.css'
import { Link } from "react-router-dom"
import { Button } from 'semantic-ui-react'

function Home() {

    return (
        <div className="app">
            <Link to="/sampleForms">
                <Button>Form Creation</Button>
            </Link>
        </div>
    )
};


export default Home;