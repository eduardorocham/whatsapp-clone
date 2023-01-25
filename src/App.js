import { useState, useEffect } from 'react';
import './App.css';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import ChatListItem from './components/chatListItem';
import ChatIntro from './components/chatIntro';
import ChatWindow from './components/chatWindow';
import NewChat from './components/newChat';

export default () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title:'Fulano de Tal', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title:'Fulano de Tal', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title:'Fulano de Tal', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title:'Fulano de Tal', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
  ]);
  const [activeChat, setActiveList] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    name: 'Eduardo'
  });
  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <NewChat 
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className='header--avatar' src={user.avatar} alt=''>

          </img>
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{color: '#919191'}} />
            </div>
            <div className='header--btn' onClick={handleNewChat}>
              <ChatIcon style={{color: '#919191'}} />
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{color: '#919191'}} />
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{color: '#919191'}}/>
            <input type='search' placeholder='Procurar ou iniciar nova conversa'/>
          </div>
        </div>
        <div className='chatList'>
          {chatList.map((item, key) => (
            <ChatListItem 
              key={key}
              data={item}
              onClick={() => setActiveList(chatList[key])}
              active={activeChat.chatId === item.chatId}
            />
          ))
          }
        </div>
      </div>
      <div className='contentarea'>
          {activeChat.chatId !== undefined &&
            <ChatWindow user={user} />
          }
          {activeChat.chatId === undefined &&
            <ChatIntro />
          }
      </div>
    </div>
  )
}