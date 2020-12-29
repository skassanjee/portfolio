import logo from './logo.svg';
import Portfolio from './Pages/Homepage/Homepage.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Resume from './Pages/Resume/Resume.component'
import Contact from './Pages/Contact/Contact.component'
import './App.css'
import NavbarMenu from './Components/NavbarMenu/NavbarMenu.component'
import { display } from '@material-ui/system';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarMenu  display={{ xs: 'block', md: 'none' }} />
         <Switch>
         <Route exact path='/' component={Portfolio}/>
         <Route exact path='/resume' component={Resume}/>
         <Route exact path='/contact' component={Contact}/>

         </Switch>
      </Router>
     
    </div>
  );
}

export default App;
