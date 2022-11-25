import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

//pages
import SignIn from './pages/SignIn';

function App() {
    return (
        <HashRouter>
            <Routes>
                {/* default route */}
                <Route path="/" element={<SignIn />} />
                <Route path="*" element={<SignIn />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
