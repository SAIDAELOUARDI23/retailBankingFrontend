import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import SignUpPage from './pages/signUpPage';
import SignInPage from './pages/signInPage';
import UserFront from './pages/userFrontPage';
import UserProfile from './pages/userProfile';
import CurrentAccount from './pages/currentAccount';
import SavingsAccount from './pages/savingsAccount';
import BetweenAccounts from './pages/betweenAccounts';
import TransferToSomeoneElse from './pages/transferToSomeoneElse';
import AdminPanel from './pages/adminPanel';
import AddRecipientPage from './pages/addRecipientPage';

const App = () => {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/signup">Sign Up</Link>
                      </li>
                      <li>
                          <Link to="/signin">Sign In</Link>
                      </li>
                      <li>
                          <Link to="/userProfile">userProfile</Link>
                      </li>
                      <li>
                          <Link to="/account/currentAccount">currentAccount</Link>
                      </li>
                      <li>
                          <Link to="/account/savingsAccount">savingsAccount</Link>
                      </li>
                      <li>
                          <Link to="/transfer/betweenAccounts">BetweenAccounts</Link>
                      </li>
                      <li>
                          <Link to="/transfer/toSomeoneElse">TransferToSomeoneElse</Link>
                      </li>
                      <li>
                          <Link to="/transfer/addRecipient">AddRecipientPage</Link>
                      </li>
                      <li>
                          <Link to="/admin/panel">AdminPanel</Link>
                      </li>
                  </ul>
              </nav>

              <Routes>
                  <Route path="/signup" element={<SignUpPage />} />
                  <Route path="/signin" element={<SignInPage />} />
                  <Route path="/userFront" element={<UserFront />} />
                  <Route path="/userProfile" element={<UserProfile />} />
                  <Route path="/account/currentAccount" element={<CurrentAccount />} />
                  <Route path="/account/savingsAccount" element={<SavingsAccount />} />
                  <Route path="/transfer/betweenAccounts" element={<BetweenAccounts />} />
                  <Route path="/transfer/toSomeoneElse" element={<TransferToSomeoneElse />} />
                  <Route path="/admin/panel" element={<AdminPanel />} />
                  <Route path="/transfer/addRecipient" element={<AddRecipientPage />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
