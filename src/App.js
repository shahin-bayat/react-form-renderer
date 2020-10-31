import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AddUsers from './Components/AddUsersForm'
import AddProducts from './Components/AddProductsForm'

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='links'>
          <Link className='link-item' to='/addusers'>
            اضافه کردن کاربر
          </Link>
          <Link className='link-item' to='/addproducts'>
            اضافه کردن محصول
          </Link>
        </div>
        <Switch>
          <Route exact path='/addusers' component={AddUsers} />
          <Route exact path='/addproducts' component={AddProducts} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
