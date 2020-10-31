import './styles.css'
import React, { useState } from 'react'
import axios from 'axios'

const AddUsersForm = () => {
  const [user, setUser] = useState({
    fullname: '',
    password: '',
    gender: '2',
  })

  const { fullname, password, gender } = user

  const handleClickFullName = e => {
    alert('test messages')
  }

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      console.log(user)
      await axios.post('test.com/api/users/testadd', user)
    } catch (error) {
      console.error('the url is probably not valid! :D')
    }
  }
  return (
    <div className='add-user'>
      <h1>اضافه کردن کاربر</h1>
      <form onSubmit={handleSubmit} className='form-group'>
        <label htmlFor='fullname'>نام کاربر</label>
        <input
          type='text'
          name='fullname'
          id='fullname'
          value={fullname}
          onClick={handleClickFullName}
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>پسورد</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
        />
        <label htmlFor='gender'>جنسیت</label>
        <div>
          <input
            type='radio'
            name='gender'
            id='2'
            value='2'
            checked={gender === '2'}
            onChange={handleChange}
          />
          زن
        </div>
        <div>
          <input
            type='radio'
            name='gender'
            id='1'
            value='1'
            checked={gender === '1'}
            onChange={handleChange}
          />
          مرد
        </div>
        <input type='submit' value='ثبت' />
      </form>
    </div>
  )
}

export default AddUsersForm
