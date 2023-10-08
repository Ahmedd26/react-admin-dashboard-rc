import './navbar.scss'
import userAvatar from '../../assets/userAvatar.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import { useContext, useState, useEffect, useRef } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import Notifications from '../notifications/Notifications'
import { notificationItems } from '../notifications/Notifications'
import Messages, { messageItems } from '../messages/Messages'

const Navbar = () => {
  const totalNotificationsCount = notificationItems.length
  const totalMessagesCount = messageItems.length
  const { dispatch } = useContext(DarkModeContext)
  const [showNotification, setShowNotification] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const wrapperRef = useRef(null)

  const handleNotificationClick = () => {
    setShowNotification((prevShowNotification) => {
      if (prevShowNotification) {
        return false
      } else {
        setShowMessage(false)
        return true
      }
    })
  }

  const handleMessageClick = () => {
    setShowMessage((prevShowMessage) => {
      if (prevShowMessage) {
        return false
      } else {
        setShowNotification(false)
        return true
      }
    })
  }

  const handleClick = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowNotification(false)
      setShowMessage(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="navbar">
      <div className="wrapper" ref={wrapperRef}>
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" /> English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item" onClick={handleNotificationClick}>
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">{totalNotificationsCount}</div>
          </div>
          <div className="item" onClick={handleMessageClick}>
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">{totalMessagesCount}</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src={userAvatar} alt="Avatar" className="avatar" />
          </div>
        </div>
      </div>
      {showNotification && <Notifications />}
      {showMessage && <Messages />}
    </div>
  )
}

export default Navbar
