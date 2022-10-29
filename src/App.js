import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='housing' element={<Housing />} />
                <Route path='*' element={<Error />} />                
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
