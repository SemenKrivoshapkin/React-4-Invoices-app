import { useContext } from 'react';
import Status from '../../../components/status/Status'
import TButton from '../../../components/TButton/TButton'
import { deleteInvoice, getAllInvoices, updateInvoiceStatus } from '../../../config/invoices';
import { AppContext } from '../../../context/InvoiceContext';
import './ItemBody.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {useNavigate } from 'react-router';
import { useParams } from 'react-router';


const ItemBody = ( {invoice} ) => {

  const context = useContext(AppContext)
  const { setInvoices } = context

  const router = useNavigate();

  const {id} = useParams()

  const calculateTotalPrice = () => {
    if(invoice){
        return invoice.items.reduce( (acc, item) => {
            acc += item.quantity * item.price;
            return acc
          }, 0)
    }
    return 0
  }
  const onDeleteInvoiceHandler = async () => {
    await deleteInvoice(id)
    await getAllInvoices().then( res => {
      setInvoices(res)
    })
    router(-1)
  }

  const onUpdateStatusHandler = async () => {
    try {
      await updateInvoiceStatus(id, "Paid")
      // await getAllInvoices().then(res => {
      //   setInvoices(res)
      // })
      router(-1)
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    invoice && <div className="itemBody__block">

      <div className="itemBody__router__block" onClick={() => router(-1)}>
        <KeyboardArrowLeftIcon style={{ fill: "white"}}/>
        <p>Go Back</p>
      </div>

      <div className="itemBody__status__button__block">
        <div className="itemBody__status__block">
          <p>Status</p>
          <Status status={invoice?.status}/>
        </div>
        <div className="itemBody__buttons__block">
          <TButton label="Edit" color="navy" rounded />
          <TButton onClick={onDeleteInvoiceHandler} label="Delete" color="crimson" rounded/>
          <TButton onClick={onUpdateStatusHandler} label="Mark as Paid" color="purple" rounded/>
        </div>
      </div>
      <div className="itemBody__invoice">

        <div className="itemBody__info__block">
          <div className="itemBody__info__location__block">
            <div>
              <h3 className='itemBody__info__location__hash'>#{invoice?._id.substring(invoice?._id.length - 6)}</h3>
              <p>{invoice?.description}</p>
            </div>
            <div>
              <p>{invoice?.billFrom?.address}</p>
              <p>{invoice?.billFrom?.city}</p>
              <p>{invoice?.billFrom?.postCode}</p>
              <p>{invoice?.billFrom?.country}</p>
            </div>
          </div>
          <div className="itemBody__info__date__block">
            <div>
              <p>Invoice Date</p>
              <h3>{new Date(invoice?.dueDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</h3>
            </div>
            <div>
              <p>Payment Due</p>
              <h3>{new Date(invoice?.dueDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</h3>
            </div>
          </div>
          <div className="itemBody__info__sender__block">
              <p>Bill to</p>
              <h3 className="info__sender__name">{invoice?.title}</h3>
              <p>{invoice?.billTo?.address}</p>
              <p>{invoice?.billTo?.city}</p>
              <p>{invoice?.billTo?.postCode}</p>
              <p>{invoice?.billTo?.country}</p>
          </div>
          <div className="itemBody__info__receiver__block">
              <p>Send To</p>
              <h3>{invoice?.email}</h3>
          </div>
        </div>

        <div className="itemBody__table__block">
          <table className="itemBody__table">
            <thead>
              <tr>
                <th align="start">Item Name</th>
                <th align="start">QTY</th>
                <th align="end">Price</th>
                <th align="end">Total</th>
              </tr>
            </thead>
            <tbody>
              {
                invoice.items.map(({itemTitle, quantity, price}, index) => 
                  { 
                    return (
                      <tr key={index} className="itemBody__tablerow">
                        <td >{itemTitle}</td>
                        <td>{quantity}</td>
                        <td align="end">${price}</td>
                        <td align="end">${(price * quantity).toFixed(2)}</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
          <div className="itemBody__invoice__price__block">
            <p>Amount due</p>
            <h2>${calculateTotalPrice().toFixed(2)}</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ItemBody;