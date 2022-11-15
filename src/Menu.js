import { Menu } from 'react-admin';

import UserIcon from '@mui/icons-material/Group';
import LabelIcon from '@mui/icons-material/Label';

const MyMenu = () => (
    <Menu>
        <Menu.Item to="/" primaryText="Home" leftIcon={<LabelIcon/>} />
        <Menu.Item to="/users" primaryText="Users" leftIcon={<UserIcon />} />
        <Menu.Item to="/posts" primaryText="Posts" leftIcon={<LabelIcon />} />
    </Menu>
);

export default MyMenu;