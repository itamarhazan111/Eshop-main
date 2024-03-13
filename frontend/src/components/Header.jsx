import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import SearchBox from './SearchBox'
import { Badge, NavDropdown } from 'react-bootstrap'
import { useContext } from 'react'
import { Store } from '../Store'
import Cookies from 'js-cookie';
import {USER_SIGNOUT} from '../Actions.jsx'



function Header() {
    const navigate=useNavigate();
    const{state,dispatch:ctxDispatch} = useContext(Store);
    const {userInfo ,cart:{cartItems}}=state;
    const logoutHandler=async()=>{
        try{
            ctxDispatch({type:USER_SIGNOUT});
            Cookies.remove('userInfo');
            localStorage.removeItem("cartItems");
            localStorage.removeItem("shippingAddress");
            localStorage.removeItem("paymentMethod");
        }catch(err){
            console.log();//dg
        }
    }

  return (

    <header>
        <NavBar bg="dark" variant="dark">
            <Container>
                <Link onClick={()=>navigate(-1)}>{location.pathname!=='/'&&<i className="fa fa-arrow-left text-white align-arrow-right">Back</i>}
                </Link>
                <LinkContainer to="/">
                    <NavBar.Brand>
                        <img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" width={80} alt='Amazon logo'/>
                    </NavBar.Brand>
                </LinkContainer>
                <SearchBox></SearchBox>
                <nav className='d flex align-items-center justify-content-end me-2 ms-4'>
                    <Link to="/cart" className='nav-link'>
                        <i className='fa fa-shopping-cart text-white'></i>
                        {cartItems.length>0&&(
                            <Badge pill bg='danger'>
                                {cartItems.reduce((a,c)=>a+c.quantity,0)}
                            </Badge>
                        )}
                    </Link>
                </nav>
                 {userInfo?(
                    <NavDropdown title={userInfo.name} className='text-white'>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Link to='/' onClick={logoutHandler} className="dropdown item">
                            Sign-out
                        </Link>
                    </NavDropdown>
                ): 
                <Link to='/signin' className="text-white nav-link">
                Sign-in
                </Link>
                  }   
            </Container>
        </NavBar>
    </header>

  )
}

export default Header