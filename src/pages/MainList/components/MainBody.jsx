import './MainBody.css'
import TButton from '../../../components/TButton/TButton'
import ListItem from '../../../components/Listitem/ListItem'
import TemporaryDrawer from '../../../components/Drawer/Drawer'
import { useContext } from 'react'
import NewInvoiceForm from '../../../components/NewInvoiceForm/NewInvoiceForm'
import { AppContext } from '../../../context/InvoiceContext'




const MainBody = () => {
    

    const context = useContext(AppContext)
    const { invoices, setInvoices, setOpenDrawer, openDrawer } = context

    function openHandler() {
        setOpenDrawer(true)
    }

  return (
    <div className='mainBody_bg'>
        <TemporaryDrawer
         openDrawer={openDrawer} 
         setOpenDrawer={setOpenDrawer} 
         Elem={NewInvoiceForm} 
         setInvoices={setInvoices}
         />
        <div className='mainBody_inner'>
            <div>
                <h3>Invoices</h3>
                <p>There are total {invoices.length} invoices</p>
            </div>
            <div>
                <select className='mainBody_select'>
                    <option>Filter by status</option>
                    <option>Draft</option>
                    <option>Pending</option>
                    <option>Paid</option>
                </select>
                <TButton onClick={openHandler} label="New invoice" color="purple" rounded />
            </div>
        </div>
        <div className='mainBody_list'>
            {
                invoices.map(el => <ListItem data={el} key={el._id} />)
            }
        </div>
    </div>
  )
}

export default MainBody