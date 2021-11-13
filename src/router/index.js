import ChatsPage from '../views/chats-page'
import HomePage from '../views/home-page'
import uniqid from 'uniqid'
import Error404 from '../components/error404'
import PersonArea from '../views/person-area-page'

export default [
    {
        id: uniqid(),
        link: '/',
        path: '/',
        title: 'Home',
        exact: true,
        component: HomePage
    },
    {
        id: uniqid(),
        link: `/chats`,
        path: '/chats',
        title: 'Chats',
        exact: false,
        component: ChatsPage
    },
    {
        id: uniqid(),
        link: '/person-area',
        path: '/person-area',
        title: 'Person-area',
        exact: true,
        component: PersonArea
    },
    {
        id: uniqid(),
        link: `/**`,
        path: '/**',
        title: 'error',
        exact: false,
        component: Error404
    },
]

