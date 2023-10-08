import './messagesPage.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined'
import { messageItems } from '../../components/messages/Messages'
const MessagesPage = () => {
  return (
    <div className="messages-page">
      <Sidebar />
      <div className="messages-page-container">
        <Navbar />
        <div className="messages-content">
          <div className="top">
            <h1>Messages</h1>
            <ChatBubbleOutlineOutlined className="icon" />
          </div>
          <div className="bottom">
            {messageItems.map((item) => (
              <div className="item" key={item.id}>
                <img
                  src={item.profilePicture}
                  alt="Message"
                  width="64"
                  height="64"
                />
                <span className="message-body">{item.body}</span>
                <div className="actions">
                  <span className="message-action">View</span>
                  <span className="message-action">Delete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesPage
