import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Header.css';
import '../styles/Footer.css';
import { Outlet } from 'react-router-dom';


const SharedLayout = () => (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
);

export default SharedLayout;