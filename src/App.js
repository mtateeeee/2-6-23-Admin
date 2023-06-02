import { Route,Routes } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Profile from './containers/Profile';
import Account from './containers/Account';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />


        </Routes>
      </header>
    </div>
  );
}

export default App;
