import './styles.css'
import React, { useState } from 'react'
import axios from 'axios'

const AddUsersForm = ({ formData }) => {
  const [user, setUser] = useState({})

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const renderForm = formData => {
    const userFormData = formData.filter(data => data.form === 'users')
    let { createurl, field, titleform } = userFormData[0]
    // console.log(user)
    return (
      <form onSubmit={e => handleSubmit(e, createurl)}>
        <h1>{titleform}</h1>
        {field.map(f => {
          const event = f?.event?.[0]
          return (
            <div className='form-group' key={f.name}>
              <label htmlFor={f.name}>{f.title}</label>
              <div>
                <input
                  type={f.type}
                  id={f.name}
                  name={f.name}
                  onChange={e => handleChange(e)}
                  value={f?.option?.[0]?.id}
                  checked={user[f.name] === f?.option?.[0]?.id}
                  onClick={e => handleClick(e, event)}
                  {...f.option}
                />
                {f?.option?.[0]?.name && <label>{f?.option?.[0]?.name}</label>}
              </div>
            </div>
          )
        })}
        <input type='submit' value={titleform} />
      </form>
    )
  }

  const handleClick = (e, eventObj) => {
    // this is not the best idea, but Im so tired!
    // we can bring other case if we know the schema!
    switch (eventObj?.event) {
      case 'alert':
        alert(eventObj?.text)
    }
  }

  const handleSubmit = async (e, createurl) => {
    try {
      e.preventDefault()
      console.log(user)
      await axios.post(createurl, user)
    } catch (error) {
      console.error('the url is probably not valid! :D')
    }
  }
  return (
    <div className='add-user'>
      {formData.length > 0 ? renderForm(formData) : <pre>Loading Form... </pre>}
    </div>
  )
}

export default AddUsersForm
