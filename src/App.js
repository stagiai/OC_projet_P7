import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import SharedLayout from './pages/SharedLayout';
import Error from './pages/Error';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='/:cardID' element={<Housing />} />
                    <Route path='*' element={<Error />} />
                </Route>                
            </Routes>
        </BrowserRouter>
    )
};

export default App;
