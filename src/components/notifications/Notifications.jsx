import { Link } from 'react-router-dom'
import notiImg from '../../assets/userAvatar.png'
import './notifications.scss'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ReplyIcon from '@mui/icons-material/Reply'
export const notificationItems = [
  {
    id: 1,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Reported Blind For Love Track "Fight till end"',
  },
  {
    id: 2,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Reported MR Beats Track "Fight till end"',
  },
  {
    id: 3,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Requested A Promotion Campaign',
  },
  {
    id: 4,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 5,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 6,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Reported Blind For Love Track "Fight till end"',
  },
  {
    id: 7,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Reported MR Beats Track "Fight till end"',
  },
  {
    id: 8,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Requested A Promotion Campaign',
  },
  {
    id: 9,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 10,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 11,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Reported Blind For Love Track "Fight till end"',
  },
  {
    id: 12,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Reported MR Beats Track "Fight till end"',
  },
  {
    id: 13,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Requested A Promotion Campaign',
  },
  {
    id: 14,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 15,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 16,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Reported Blind For Love Track "Fight till end"',
  },
  {
    id: 17,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Reported MR Beats Track "Fight till end"',
  },
  {
    id: 18,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Requested A Promotion Campaign',
  },
  {
    id: 19,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 20,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 21,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Reported Blind For Love Track "Fight till end"',
  },
  {
    id: 22,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Reported MR Beats Track "Fight till end"',
  },
  {
    id: 23,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Requested A Promotion Campaign',
  },
  {
    id: 24,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 25,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 26,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Reported Blind For Love Track "Fight till end"',
  },
  {
    id: 27,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Reported MR Beats Track "Fight till end"',
  },
  {
    id: 28,
    profilePicture: `${notiImg}`,
    body: 'MR Beats Requested A Promotion Campaign',
  },
  {
    id: 29,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
  {
    id: 30,
    profilePicture: `${notiImg}`,
    body: 'Blind For Love Asked For Re-Fund',
  },
]
const Notifications = () => {
  return (
    <div className="notifications">
      <div className="top">
        Notifications
        <NotificationsNoneOutlinedIcon />
      </div>
      <div className="bottom">
        {notificationItems.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.profilePicture} alt="Notification" />
            <span className="notification-body">{item.body}</span>
            <span className="notification-action">View</span>
          </div>
        ))}
      </div>
      <Link to="/notifications">
        <div className="link">
          <span>View Full Notifications</span>
          <ReplyIcon className="icon" />
        </div>
      </Link>
    </div>
  )
}

export default Notifications
