import ChatsPage from '../views/chats-page'
import HomePage from '../views/home-page'
import uniqid from 'uniqid'
import rooms from '../store/rooms'
import Error404 from '../components/error404'
import PersonArea from '../views/person-area-page'

const slagFirtsRoom = rooms[0].title.toString().toLowerCase().replace(' ','_')

export default [
    {
        id: uniqid(),
        link: '/',
        path: '/',
        title: 'Home',
        exact: true,
        component: <HomePage></HomePage>
    },
    {
        id: uniqid(),
        link:   `/chats/${slagFirtsRoom}`,
        path: '/chats/:chatName',
        title: 'Chats',
        exact: false,
        component: <ChatsPage></ChatsPage>
    },
    {
        id: uniqid(),
        link: '/person-area',
        path: '/person-area',
        title: 'Person-area',
        exact: true,
        component: <PersonArea></PersonArea>
    },
    {
        id: uniqid(),
        link:   `/**`,
        path: '/**',
        title: 'error',
        exact: false,
        component: <Error404></Error404>
    },
]

