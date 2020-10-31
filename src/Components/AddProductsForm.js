import './styles.css'
import React, { useState } from 'react'
import axios from 'axios'

const AddProductsForm = () => {
  const [product, setProduct] = useState({
    productname: '',
    count: '',
  })

  const { productname, count } = product

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
  return (
    <div className='add-user'>
      <h1>اضافه کردن محصول</h1>
      <form onSubmit={handleSubmit} className='form-group'>
        <label htmlFor='productname'>نام محصول</label>
        <input
          type='text'
          name='productname'
          id='productname'
          value={productname}
          onChange={handleChange}
        />
        <label htmlFor='count'>تعداد</label>
        {/* is mentioned to have type=text but type=number would make more sense! */}
        <input
          type='text'
          name='count'
          id='count'
          value={count}
          onChange={handleChange}
        />
        <input type='submit' value='ثبت' />
      </form>
    </div>
  )
}

export default AddProductsForm
