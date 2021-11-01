import {Container} from '@mui/material'
import AppHeader from './components/header'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import routes from './router'

function App() {
    return (
        <Container>
            <Router>
                <AppHeader></AppHeader>
                <Switch>
                    {
                        routes.map(({id, path, component, exact}) =>
                            <Route key={id} path={path} exact={exact}>
                                {component}
                            </Route>)
                    }
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
