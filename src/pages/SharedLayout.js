import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import '../styles/SharedLayout.css'


const SharedLayout = () => (
    <div className='sharedLayout'>
        <Header />
        <Outlet />
        <Footer />
    </div>
);

export default SharedLayout;