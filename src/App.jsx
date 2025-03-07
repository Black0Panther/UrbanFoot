import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import ContextProvider from './Store/ContextProvide';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import {} from 'firebase/auth'
import { app } from './Firebase';
import Signin from './Pages/Signin';
import Stripe from './Components/Stripe';
import Corousel from './Components/Corousel';
import Mainproducts from './Pages/Mainproducts';
import Signupwarning from './Components/Signupwarning';
import 'bootstrap/dist/css/bootstrap.css';
import Checkoutform from './Components/Checkoutform';
import ShopNow from './Components/ShopNow';
import Shopnowtwo from './Components/Shopnowtwo';


function App() {
  const [shoeData, setShoeData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5002/sneakers/puma") // Adjust endpoint to your backend API
            .then((res) => res.json())
            .then((data) =>{
              const updatedData = data.map((shoe) => ({
              ...shoe,
              quantity: 1,
            })); 
            setShoeData(updatedData);
    })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
  //data set
  // const shoeData = [
  //   {id:1 , img:"/images/shoe1.jpg",name:'shoe1', content:'lorem', quantity:1, price: 500.00},
  //   {id:2 , img:"/images/shoe2.jpg",name:'shoe2', content:'lorem', quantity:1, price: 500.00},
  //   {id:3 , img:"/images/shoe3.jpg",name:'shoe3', content:'lorem', quantity:1, price: 500.00},
  //   {id:4 , img:"/images/shoe4.jpg",name:'shoe4', content:'lorem', quantity:1, price: 500.00},
  //   {id:5 , img:"/images/shoe5.jpg",name:'shoe5', content:'lorem', quantity:1, price: 500.00},
  //   {id:6 , img:"/images/shoe6.jpg",name:'shoe6', content:'lorem', quantity:1, price: 500.00},
  //   {id:7 , img:"/images/shoe7.jpg",name:'shoe7', content:'lorem', quantity:1, price: 500.00},
  //   {id:8 , img:"/images/shoe8.jpg",name:'shoe8', content:'lorem', quantity:1, price: 500.00},
  //   {id:9 , img:"/images/shoe9.jpg",name:'shoe9', content:'lorem', quantity:1, price: 500.00},
  //   {id:10 , img:"/images/shoe10.jpg",name:'shoe10', content:'lorem', quantity:1, price: 500.00},
  //   {id:11 , img:"/images/shoe11.jpg",name:'shoe11', content:'lorem', quantity:1, price: 500.00},
  //   {id:8 , img:"/images/shoe12.jpg",name:'shoe12', content:'lorem', quantity:1, price: 500.00},
  //   {id:9 , img:"/images/shoe13.jpg",name:'shoe13', content:'lorem', quantity:1, price: 500.00},
  //   {id:10 , img:"/images/shoe14.jpg",name:'shoe14', content:'lorem', quantity:1, price: 500.00},
  //   {id:11 , img:"/images/shoe15.jpg",name:'shoe15', content:'lorem', quantity:1, price: 500.00},
  //   {id:11 , img:"/images/shoe16.jpg",name:'shoe16', content:'lorem', quantity:1, price: 500.00},

  // ];

  return (
    <>
    <ContextProvider>
    <Navbar></Navbar>
    {/* <Hero></Hero>*/}
    
    {/* Routes one render and page reload whole page so we use the Links tag then will not reload , links can be used in component itself like in header (home , support instead of 'a' tag*/}
    <Routes>
    <Route path="/" element={
          <>
          {/* to be shown only on hopage pt down */}
            <Hero />
            <Stripe></Stripe>
          <ShopNow></ShopNow>
       
         <Shopnowtwo></Shopnowtwo>
          </>
        } />

    <Route path="/cart" element={<Cart />} />
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/Signin' element={<Signin/>}></Route>
    <Route path='/Mainproducts' element={<Mainproducts shoeData={shoeData}/>}></Route>
    <Route path='/Showpopup' element={<Signupwarning/>}></Route>
    <Route path='/Checkoutform' element={<Checkoutform/>}></Route>
    </Routes> 

   <Footer></Footer>
   </ContextProvider>
    </>
  )
}

export default App
