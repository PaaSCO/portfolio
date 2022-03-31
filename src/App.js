
import './App.css';
import Navbar from './components/Navbar'
import HomePage from './Pages/Home';
import {Switch, Route} from 'react-router-dom';
import Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Career from './Pages/Career';
import Portfolios from './Pages/Portfolios';
import About from './Pages/About';
import { useState } from 'react';
import styled from 'styled-components';


function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <AppStyled>
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
         <div className="content">
       <Switch>
         <Route path='/' exact>
             <HomePage/>

         </Route>
         <Route path='/about' exact>
             <About/>

                          </Route>
                          <Route path='/career' exact>
             <Career/>

                          </Route>
                          
         <Route path='/portfolios' exact>
             <Portfolios/>

         </Route>
         <Route path='/blogs' exact>
             <Blogs/>

         </Route>
         <Route path='/contact' exact>
             <Contact/>

         </Route>
       </Switch>

         </div>
      </div>

      
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`





.App{
    .sidebar{
        width: 16%;
        height: 100vh;
        background-color: #191D2B;
        position: fixed;
        z-index: 11;
        border-right: 1px solid #2e344e;
        transform-origin: left;
        @media screen and (max-width: 1000px){
            transition: all .4s ease-in-out;
            transform: translateX(-100%);
            width: 30%;
        }
        @media screen and (max-width: 411px){
            width: 50%;
        }
    }
    .nav-toggle{
        @media screen and (max-width: 1000px){
            transition: all .4s ease-in-out;
            transform: translateX(0);
        }
    }

    .main-content{
        width: 84%;
        margin-left: 16%;
        background-color: #10121B;
        min-height: 100vh;
        background-image: url(../img/dots.svg);
        display: grid;
        position: relative;
        .content{
            margin: 5rem 10rem;
            @media screen and (max-width: 1100px){
                margin: 2rem 10rem;
            }
            @media screen and (max-width: 1400px){
                margin: 3rem 10rem;
            }
            @media screen and (max-width: 1400px){
                margin: 3rem 10rem;
            }
            @media screen and (max-width: 710px){
                margin: 2rem 3rem;
            }
        }
        @media screen and (max-width: 1000px){
            margin-left: 0;
            width: 100%;
        }
    }
}

.nav-btn{
    position: absolute;
    z-index: 10;
    right: 10%;
    top: 5%;
    width: 4rem;
    height: 4rem;
    display: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .lines-1, .lines-2, .lines-3{
        height: .4rem;
        width: 100%;
        background-color: #3858cc;
        pointer-events: none;
        display: none;
        border-radius: 20px;
        &:not(:last-child){
            margin-bottom: .5rem;
        }
    }
    @media screen and (max-width: 1000px){
        display: block;
        .lines-1, .lines-2, .lines-3{
            display: block;
        }
    }
}

`;

export default App;
