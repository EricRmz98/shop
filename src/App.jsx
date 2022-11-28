import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

//pages
import SignIn from './pages/SignIn';
import Session from './pages/Session';
import Cart from './pages/Cart';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="*" element={<SignIn />} />
                <Route path="/session" element={<Session />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
