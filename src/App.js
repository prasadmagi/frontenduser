
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Test } from './Test';
import { CreateUser } from './components/CreateUser';
import { LoginUser } from './components/LoginUser';
import { Layout } from './components/Layout';
import { Logout } from './components/Logout';






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
          <Route path="Logout" element={<Logout />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
