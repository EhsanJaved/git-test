// import logo from './logo.svg';
import {Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menuComponents';
import './App.css';

function App() {
  return (
    <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href="/"> the new app </NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
 

    </div>
  );
}

export default App;
