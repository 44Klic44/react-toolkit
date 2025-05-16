
import './App.css';
import Counter from './component';
import Mycomponent from './mycomponent-roolkit/my-slices';
import UserProfile from './thunk/component-thunk';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
       <Counter></Counter>
       <Mycomponent></Mycomponent>
       <UserProfile ></UserProfile>
       
        <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
