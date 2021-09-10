import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import FormInput from "../pages/formInput";
import CompleteForm from "../pages/completeForm";


export function Routing() {
    return (
        <Switch>
            <Route path="/sampleForms" component={FormInput} />
            <Route path="/finshedDoc" component={CompleteForm} />
            <Route path="/" component={Home} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    );
}