import logo from './logo.svg';
import './App.css';
import Slide from './components/slide/Slide';
import Header from './components/header/Header';
import NavbarContent from './components/navbarContent/NavbarContent';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Product from './components/product/Product';
import Home from './components/home/Home';
import Author from './components/author/Author';
import Introduce from './components/introduce/Introduce';
import Contact from './components/contact/Contact';


function App() {



  return (
    <div className="App">
      <Header />
      <Slide />
      <BrowserRouter>
        <div className="row">
          <div className="col-3 ">
            <div className="container">

              <NavbarContent />
            </div>
          </div>

          <div className="col-9">

            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/Product' component={Product}></Route>
              <Route path='/Author' component={Author}></Route>
              <Route path='/Introduce' component={Introduce}></Route>
              <Route path='/Contact' component={Contact}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
