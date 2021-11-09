import { Container } from '@mui/material'
import AppHeader from './components/header'
import { Provider } from "react-redux";
import store from './store'


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import routes from './router'

function App() {
    return (
        <Provider store={store}>
            <Container>
                <Router>
                    <AppHeader></AppHeader>
                    <Switch>
                        {
                            routes.map(({ id, path, component, exact }) =>
                                <Route key={id} path={path} exact={exact} component={component}></Route>)
                        }
                    </Switch>
                </Router>
            </Container>
        </Provider>
    );
}

export default App;
