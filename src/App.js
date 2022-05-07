import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import ManageInventories from './Pages/About/ManageIntventories/ManageInventories';
import AddItem from './Pages/AddItem/AddItem';
import ExtraSection from './Pages/Home/Extrasection/ExtraSection';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product/:productId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/manage' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/extra' element={<ExtraSection></ExtraSection>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
