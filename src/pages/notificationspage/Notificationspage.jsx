import './notificationspage.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { notificationItems } from '../../components/notifications/Notifications'
const NotificationsPage = () => {
  return (
    <div className="notifications-page">
      <Sidebar />
      <div className="notifications-page-container">
        <Navbar />
        <div className="notification-content">
          <div className="top">
            <h1>Notifications</h1>
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="bottom">
            {notificationItems.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.profilePicture} alt="Notification" />
                <span className="notification-body">{item.body}</span>
                <div className="actions">
                  <span className="notification-action">View</span>
                  <span className="notification-action">Delete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationsPage
