import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/Error';

function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route path='/:cardID' element={<Housing />} />
                <Route path='/error' element={<Error />} />              
            </Routes>

        </BrowserRouter>
    )
};

export default App;
