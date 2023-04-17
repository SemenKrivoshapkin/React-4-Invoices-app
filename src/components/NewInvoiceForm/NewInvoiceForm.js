import React, { useState, useContext } from 'react'
import './NewInvoiceForm.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createInvoice, getAllInvoices } from '../../config/invoices';
import { AppContext } from '../../context/InvoiceContext';


const NewInvoiceForm =  () => {
 
    const {  setInvoices, setOpenDrawer } = useContext(AppContext)
    const [title, setTitle] = useState("")
    const [dueDate, setDueDate] = useState()
    const [billFrom, setBillFrom] = useState({
      address: "",
      city: "",
      postCode: "",
      country: ""
    })
    const [billTo, setBillTo] = useState({
      address: "",
      city: "",
      postCode: "",
      country: ""
    })
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState("Pending")
    const [items, setItems] = useState([
      {
        itemTitle: "",
        quantity: "",
        price: "",
      }
    ])

    const onHandleAtItems = () => {
      setItems([...items, {
        itemTitle: '',
        quantity: '',
        price: '',
      }])
    }

    const onDeleteItem = (index) => {
      
      const newItems = items.filter((_, i) => i !== index)
      setItems(newItems)
    }

    const onSaveInvoiceHandler = async () => {
      const newInvoice = {
        title,
        dueDate,
        billFrom,
        billTo,
        description,
        email,
        status,
        items
      }

      await createInvoice(newInvoice)
      getAllInvoices().then(res => setInvoices(res))
      
      setOpenDrawer(false)
    }

  return (
    <div className='invoice__form'>
        <h3>New invoice</h3>
        <div className='invoice_form_container'>
          <h4>Bill From</h4>
            <label htmlFor='billFromAddress'>Street Address</label>
            <input  value={billFrom.address}
              onChange={(e) => {
                const newAddress = {...billFrom}
                newAddress.address = e.target.value
                setBillFrom(newAddress)
              }}
              type='text'
              id='billFromAddress' />
            <div className='invoice_form_address'>
              <div className='invoice_form_address_item'>
                <label htmlFor='billFromCity'>City</label>
                <input  value={billFrom.city}
                onChange={(e) => {
                  const newCity = {...billFrom}
                  newCity.city = e.target.value
                  setBillFrom(newCity)
                }}
                type='text'
                id='billFromCity' />
              </div>
              <div className='invoice_form_address_item'>
                <label htmlFor='billFromPostCode'>Post Code</label>
                <input  value={billFrom.postCode}
                onChange={(e) => {
                  const newPostCode = {...billFrom}
                  newPostCode.postCode = e.target.value
                  setBillFrom(newPostCode)
                }}
                type='text'
                id='billFromPostCode' />
              </div>
              <div className='invoice_form_address_item'>
                <label htmlFor='billFromCountry'>Country</label>
                <input  value={billFrom.country}
                onChange={(e) => {
                  const newCountry = {...billFrom}
                  newCountry.country = e.target.value
                  setBillFrom(newCountry)
                }}
                type='text'
                id='billFromCountry' />
              </div>
            </div>
          <h4>Bill To</h4>
            <label htmlFor='title'>Client's Name</label>
            <input value={title}
              onChange={(e) => setTitle(e.target.value)} 
              type='text' 
              id='title' />
            <label htmlFor='email'>Client's Email</label>
            <input  value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              id='email' />
            <label htmlFor='billToAddress'>Street Address</label>
            <input  value={billTo.address}
              onChange={(e) => {
                const newAddress = {...billTo}
                newAddress.address = e.target.value
                setBillTo(newAddress)
              }}
              type='text'
              id='billToAddress' />
            <div className='invoice_form_address'>
              <div className='invoice_form_address_item'>
                <label htmlFor='billToCity'>City</label>
                <input  value={billTo.city}
                onChange={(e) => {
                  const newCity = {...billTo}
                  newCity.city = e.target.value
                  setBillTo(newCity)
                }}
                type='text'
                id='billToCity' />
              </div>
              <div className='invoice_form_address_item'>
                <label htmlFor='billToPostCode'>Post Code</label>
                <input  value={billTo.postCode}
                onChange={(e) => {
                  const newPostCode = {...billTo}
                  newPostCode.postCode = e.target.value
                  setBillTo(newPostCode)
                }}
                type='text'
                id='billToPostCode' />
              </div>
              <div className='invoice_form_address_item'>
                <label htmlFor='billToCountry'>Country</label>
                <input  value={billTo.country}
                onChange={(e) => {
                  const newCountry = {...billTo}
                  newCountry.country = e.target.value
                  setBillTo(newCountry)
                }}
                type='text'
                id='billToCountry' />
              </div>
            </div>
            <label htmlFor='dueDate'>Due Date</label>
            <DatePicker dateFormat="dd MMMM yyyy"
              selected={dueDate}
              id='dueDate'
              onChange={(date) => setDueDate(date)} />
            <label htmlFor='description'>Project Description</label>
            <input value={description}
              onChange={(e) => setDescription(e.target.value)} 
              type='text' 
              id='description' />
            <label htmlFor='status'>Status</label>
            <select  value={status}
              onChange={(e) => setStatus(e.target.value)}
              name='status'
              id='status'>
                <option value='Pending'>Pending</option>
                <option value='Draft'>Draft</option>
                <option value='Paid'>Paid</option>
            </select>
            <h4>Item List</h4>
            <div className='invoice_form_container_items'>
              {
                items.map((item, index) => (
                  <div key={index} className='invoice_form_item'>
                    <div className='invoice_form_item_input'>
                      <label htmlFor="itemTitle">Name</label>
                      <input onChange={(e) => {
                        const newItems = [...items]
                        newItems[index].itemTitle = e.target.value
                        setItems(newItems)
                      }} 
                      value={item.itemTitle}
                      type="text" 
                      id="itemTitle" />
                    </div>
                    <div className='invoice_form_item_input item_quantity'>
                      <label htmlFor="quantity">Qty.</label>
                      <input onChange={(e) => {
                        const newItems = [...items]
                        newItems[index].quantity = parseInt(e.target.value)
                        setItems(newItems)
                      }} 
                      value={item.quantity}
                      type="text"
                      id="quantity" />
                    </div>
                    <div className='invoice_form_item_input item_price'>
                      <label htmlFor="price">Price</label>
                      <input onChange={(e) => {
                        const newItems = [...items]
                        newItems[index].price = parseInt(e.target.value)
                        setItems(newItems)
                      }} 
                      value={item.price}
                      type="number"
                      id="price" />
                    </div>
                    <div className='invoice_form_item_input item_price'>
                      <label>Total</label>
                      <p>${(item?.price * item?.quantity).toFixed(2)}</p>
                    </div>
                    <button onClick={() => onDeleteItem(index)}>Delete</button>
                  </div>
                ))
              }
              <button onClick={onHandleAtItems}>Add Item</button>
            </div>
            <button onClick={onSaveInvoiceHandler}>Save</button>
        </div>
    </div>
  )
}

export default NewInvoiceForm