import Status from "../status/Status"
import './Listitem.css'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useNavigate } from "react-router-dom";


const ListItem = (props) => {
  const {
    _id,
    title,
    dueDate,
    status
  } = props.data

  const router = useNavigate();

  return (
    <div className="list_item" onClick={() => router(`${_id}`)} >
        <b>#{_id.substring(_id.length - 6)}</b>
        <p>Due {new Date(dueDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        <p>{title}</p>
        <p>$</p>
        <Status status={status} />
        <ArrowForwardIosSharpIcon   style={{fill: 'white', opacity: '0.3'}} />
    </div>
  )
}

export default ListItem