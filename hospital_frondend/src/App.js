import './App.css';
import CounterFunction from './components/CounterFunction';
import Header from './components/header';
import Images from './components/image';
import AddPayment from './components/AddPayment';
import AllPayment from './components/AllPayments';
import EditPayment from './components/EditPayments';
import AddWard from './components/AddWard';
import AllWard from './components/AllWards';
import EditWard from './components/EditWards';
import Footter from './components/footer';
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Images/>
        <Route path="/add" exact component={AddPayment} />        
        <Route path="/" exact component={AllPayment} /> 
        <Route path="/update/:id" exact component={EditPayment} />  
        <Route path="/wardadd" exact component={AddWard} />  
        <Route path="/allwards" exact component={AllWard} />
        <Route path="/updateward/:id" exact component={EditWard} />   
        <Footter/> 
      </div>
    </Router>
  );
}

export default App;
