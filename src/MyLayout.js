import { Layout } from 'react-admin';
import MyMenu from './Menu';
import MyAppBar from './AppBar';

const MyLayout = (props) => (
    <Layout {...props} menu={MyMenu} appBar={MyAppBar} />
);

export default MyLayout