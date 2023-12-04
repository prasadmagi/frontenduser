
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Test } from './Test';
import { CreateUser } from './components/CreateUser';
import { LoginUser } from './components/LoginUser';
import { Layout } from './components/Layout';
import { Logout } from './components/Logout';
import { DeleteUser } from './components/DeleteUser';
import { Private } from './components/Private';
import { Protected } from './components/Protected';
import { ChangeUserName } from './components/ChangeUserName';
import { ChangePassword } from './components/ChangePassword';






function App() {
  return (
    <div className="App">
      {/* <Test/> */}

      {/* <CreateUser/> */}

      {/* <LoginUser/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Test />} />
            <Route path="CreateUser" element={<CreateUser />} />
            <Route path="LoginUser" element={<LoginUser />} />
            <Route path="DeleteUser" element={<DeleteUser />} />
            <Route path="Logout" element={<Logout />} />
            <Route path="Private" element={< Protected Component={Private} />} />
            <Route path="ChangeUserName" element={< Protected Component={ChangeUserName} />} />
            <Route path="ChangePassword" element={< Protected Component={ChangePassword} />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
