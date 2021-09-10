import Form from "@rjsf/core";
import { React } from 'react';
import PropTypes from 'prop-types';

function ReactJsonForm(props) {    
    const formData = props.onLoad();
    if (!Object.keys(props.schema).includes('key')){
        throw new Error("Developer Action - Make sure to include key on schema")
    }
    return <Form schema={props.schema} onSubmit={props.onSubmit} formData={formData} children={props.disabled} disabled={props.disabled}/>;
}

ReactJsonForm.defaultProps = {
    disabled: false,
    formData: {}
}


ReactJsonForm.propTypes = {
    disabled: PropTypes.bool,
    schema: PropTypes.object.isRequired,
    onLoad: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default ReactJsonForm;
