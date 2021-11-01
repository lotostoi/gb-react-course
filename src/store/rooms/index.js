import uniqid from 'uniqid'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const rooms = [
    {
        id: uniqid(),
        title: 'Main Room',
        icon: <AllInboxIcon></AllInboxIcon>,
    },
    {
        id: uniqid(),
        title: 'Sport',
        icon: <SportsHandballIcon></SportsHandballIcon>,
    },
    {
        id: uniqid(),
        title: 'News',
        icon: <FiberNewIcon></FiberNewIcon>
    },
    {
        id: uniqid(),
        title: 'Relations',
        icon: <ConnectWithoutContactIcon></ConnectWithoutContactIcon>
    },
]

export default rooms