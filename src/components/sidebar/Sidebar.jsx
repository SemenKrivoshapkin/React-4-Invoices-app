import './Sidebar.css'
import CircleNotificationsSharpIcon from '@mui/icons-material/CircleNotificationsSharp';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BotImage from '../../images/bot.png'

const Sidebar = () => {
  return (
    <div className="sidebar_bg">
        <div className='sidebar_circle_block'>
          <CircleNotificationsSharpIcon style={{width: 50, height: 50, fill: '#fff'}} />
        </div>
        <div className='avatar_mode_block'>
          <LightModeRoundedIcon style={{fill: '#fff'}} />
          <div className='sidebar_avatar_block'>
            <img src={BotImage} alt='bootimage' className='avatar_img' />
          </div>
        </div>
    </div>
  )
}

export default Sidebar