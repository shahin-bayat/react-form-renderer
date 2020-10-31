import './styles.css'
import React, { useState } from 'react'
import axios from 'axios'

const AddProductsForm = ({ formData }) => {
  const [product, setProduct] = useState({})

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    try {
      e.preventDefault()
      console.log(product)
      await axios.post('test.com/api/product/testadd', product)
    } catch (error) {
      console.error('the url is probably not valid again! :D')
    }
  }

  const renderForm = formData => {
    const userFormData = formData.filter(data => data.form === 'product')
    let { createurl, field, titleform } = userFormData[0]
    return (
      <form onSubmit={e => handleSubmit(e, createurl)}>
        <h1>{titleform}</h1>
        {field.map(f => {
          return (
            <div className='form-group' key={f.name}>
              <label htmlFor={f.name}>{f.title}</label>
              <input
                type={f.type}
                id={f.name}
                name={f.name}
                onChange={(e, fieldName) => handleChange(e, fieldName)}
                {...f.option}
              />
            </div>
          )
        })}
        <input type='submit' value={titleform} />
      </form>
    )
  }
  return (
    <div className='add-user'>
      {formData.length > 0 ? renderForm(formData) : <pre>Loading Form... </pre>}
    </div>
  )
}

export default AddProductsForm
