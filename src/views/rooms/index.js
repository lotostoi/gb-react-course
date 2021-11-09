import uniqid from 'uniqid'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default [
    {
        id: uniqid(),
        title: 'Main Room',
        icon: AllInboxIcon,
    },
    {
        id: uniqid(),
        title: 'Sport',
        icon: SportsHandballIcon,
    },
    {
        id: uniqid(),
        title: 'News',
        icon: FiberNewIcon
    },
    {
        id: uniqid(),
        title: 'Relations',
        icon: ConnectWithoutContactIcon
    },
]