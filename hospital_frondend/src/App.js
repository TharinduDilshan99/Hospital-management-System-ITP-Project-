import './App.css';
import CounterFunction from './components/CounterFunction';
import Header from './components/header';
import Home from './components/home';
import Images from './components/image';
import AddPayment from './components/AddPayment';
import AllPayment from './components/AllPayments';
import ViewPay from './components/viewpay';
import EditPayment from './components/EditPayments';
import ViewPayment from './components/ViewPayment';
import AddWard from './components/AddWard';
import AllWard from './components/AllWards';
import ViewWar from './components/viewwar';
import EditWard from './components/EditWards';
import ViewWard from './components/ViewWard';
import Footter from './components/footer';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Images/>
        <Route path="/dashbord" exact component={Home} /> 
        <Route path="/add" exact component={AddPayment} />      
        <Route path="/" exact component={AllPayment} /> 
        <Route path="/viewpay/:id" exact component={ViewPay} /> 
        <Route path="/update/:id" exact component={EditPayment} />
        <Route path="/get/:id" exact component={ViewPayment} />   
        <Route path="/wardadd" exact component={AddWard} />  
        <Route path="/allwards" exact component={AllWard} />
        <Route path="/viewwar/:id" exact component={ViewWar} />
        <Route path="/updateward/:id" exact component={EditWard} />
        <Route path="/getward/:id" exact component={ViewWard} />   
        <Footter/> 
      </div>
    </Router>
  );
}

export default App;

