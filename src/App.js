import MainPage from './views/main'
import {Container} from '@mui/material'
import AppHeader from './components/header'


function App() {
    return (
        <Container>
            <AppHeader></AppHeader>
            <MainPage></MainPage>
        </Container>
    );
}

export default App;
