import './Status.css'

const styleStatus = { 
    'Paid': { 
        color: 'rgb(56, 154, 133)', 
        backgroundColor: 'rgb(31, 44, 63)' 
    }, 
    'Pending': { 
        color: 'rgb(253, 138, 1)', 
        backgroundColor: 'rgb(43, 40, 52)' 
    }, 
    'Draft': { 
        color: 'rgb(218, 220, 242)', 
        backgroundColor: 'rgb(42, 44, 67)' 
    } 
}

const Status = ({status}) => {
    return (
        <div className="status__bg" style={{ 
            color: getStyleByStatus(status)?.color,  
            backgroundColor: getStyleByStatus(status)?.backgroundColor,
            width: 75
        }}>
            {status}
        </div>
    )
}

const getStyleByStatus = (status) => {
    if (status) return styleStatus[status];
    return styleStatus['Draft'];
  };

export default Status;