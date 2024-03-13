import './App.css'
import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Title from './components/Title'
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import { ToastContainer } from 'react-toastify'
import ResetPage from './pages/ResetPage.jsx'
import VerifyPage from './pages/VerifyPage.jsx'
import ChangePage from './pages/ChangePage.jsx'
import DescriptionPage from './pages/DescriptionPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ShippingPage from './pages/ShippingPage.jsx'
import PaymentPage from './pages/PaymentPage.jsx'
import SubmitOrderPage from './pages/SubmitOrderPage.jsx'
import SummaryPage from './pages/SummaryPage.jsx'
import SearchPage from './pages/SearchPage.jsx'


function App() {

  return (
    <BrowserRouter>
      <div className='d-flex flex-column side-allPage min-width'>
        <ToastContainer position='bottom-center' limit={1}/>
        <Header/>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/signUp' element={<SignUp/>}></Route>
              <Route path='/signIn' element={<SignIn/>}></Route>
              <Route path='/product/:token' element={<DescriptionPage/>}></Route> 
              <Route path='/reset' element={<ResetPage/>}></Route>
              <Route path='/verify' element={<VerifyPage/>}></Route>
              <Route path='/change' element={<ChangePage/>}></Route>
              <Route path='/cart' element={<CartPage/>}></Route>
              <Route path='/shipping' element={<ShippingPage/>}></Route>
              <Route path='/payment' element={<PaymentPage/>}></Route>
              <Route path='/placeorder' element={<SubmitOrderPage/>}></Route>
              <Route path='/order/:id' element={<SummaryPage/>}></Route>
              <Route path='/search' element={<SearchPage/>}></Route>
            </Routes>
          </Container>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
