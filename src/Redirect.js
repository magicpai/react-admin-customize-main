import { useEffect } from 'react';
import { useRedirect } from 'react-admin';

const RedirectLogin = () => {
    const redirect = useRedirect();
    useEffect(() => {
        redirect('/');
    }, []);
}

export default RedirectLogin;