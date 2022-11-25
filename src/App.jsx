import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

//pages
import SignIn from './pages/SignIn';
import Session from './pages/Session';

function App() {
    return (
        <HashRouter>
            <Routes>
                {/* default route */}
                <Route path="/" element={<SignIn />} />
                <Route path="*" element={<SignIn />} />
                <Route path="/session" element={<Session />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
