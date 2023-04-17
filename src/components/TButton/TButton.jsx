import './TButton.css'

const TButton = ({label, rounded, color, onClick}) => {
  return (
    <button onClick={onClick} className="tbtn_block"
      style= {{
        borderRadius: rounded ? 25 : 'unset',
        backgroundColor: color
      }} >
      {label}
    </button>
  )
}

export default TButton