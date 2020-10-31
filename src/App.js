import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AddUsers from './Components/AddUsersForm'
import AddProducts from './Components/AddProductsForm'
import metaData from './data/formData.json'

function App() {
  const [formData, setFormData] = useState([])
  // getting data when the component first mounts
  // this simulates the data fetching
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const { data } = await axios.get('/api/to/fetch/form/meta')
        setFormData(data)
        // here we have to set the data in state but we use our fake data instead
        // instead of setFormData(data) we make this inside catch block because this line won't run
      } catch (error) {
        setFormData(metaData)
        console.error('There is sure an error! :D')
      }
    }
    fetchFormData()
  }, [])

  // we can use context to pass formData using useContext hook

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
          <Route
            exact
            path='/addusers'
            render={props => <AddUsers {...props} formData={formData} />}
          />
          <Route
            exact
            path='/addproducts'
            render={props => <AddProducts {...props} formData={formData} />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
