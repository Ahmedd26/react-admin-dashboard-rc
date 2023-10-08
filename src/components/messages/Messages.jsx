import { Link } from 'react-router-dom'
import notiImg from '../../assets/userAvatar.png'
import './messages.scss'
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined'

export const messageItems = [
  {
    id: 1,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 2,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 3,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 4,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 5,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 6,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 7,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 8,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 9,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 10,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 11,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 12,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 13,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 14,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
  {
    id: 15,
    profilePicture: `${notiImg}`,
    body:
      'Bro whatsup i want a HIT beat as your normal can you call me real quick? ',
  },
]
const Messages = () => {
  return (
    <div className="messages">
      <div className="top">
        Messages
        <ChatBubbleOutlineOutlined />
      </div>
      <div className="bottom">
        {messageItems.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.profilePicture} alt="Message" />
            <span className="message-body">{item.body}</span>
            <span className="message-action">View</span>
          </div>
        ))}
      </div>
      <Link to="/messages">
        <div className="link">
          <span>View All Messages</span>
          <ChatBubbleOutlineOutlined className="icon" />
        </div>
      </Link>
    </div>
  )
}

export default Messages
