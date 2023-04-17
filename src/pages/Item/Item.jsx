import { useParams } from 'react-router'
import Sidebar from '../../components/sidebar/Sidebar'
import ItemBody from './components/ItemBody'
import './Item.css'
import { useEffect, useState } from 'react'
import { getInvoiceById } from '../../config/invoices'

// const Item = () => {

//   const {id} = useParams()
//   const [invoice, setInvoice] = useState([])
//   useEffect((id) => {
//     getInvoiceById(id).then(res => setInvoice(res))
//   }, [])


//   return (
//   <>
//     <Sidebar />
//     <ItemBody invoice={invoice} />
//   </>
    
//   )
// }

// export default Item

// import { useState, useEffect } from 'react';
// import Sidebar from '../../components/Sidebar/Sidebar';
// import ItemBody from './components/ItemBody';
// import './Item.css';
// import {useParams} from 'react-router';
// import { getInvoiceById } from '../../config/invoices';

const Item = () => {

  const { id } = useParams();
  const [ invoice, setInvoice ] = useState();
  // const [items, setItems] = useState([]);

  useEffect( () => {
    if(id) getInvoiceById(id).then(res => setInvoice(res));
  }, [id]);


  return (
    <>
      <Sidebar />
      <ItemBody invoice={invoice} />
    </>

  );
};

export default Item;