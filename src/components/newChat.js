import { useState } from 'react';

import './newChat.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({chatList, user, show, setShow}) => {
    const [list, setList] = useState([
        {id: 1234, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'eduardo'},
        {id: 1234, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'eduardo'},
        {id: 1234, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'eduardo'},
        {id: 1234, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'eduardo'},
    ]);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className='newChat' style={{left: show ? 0 : -415}}>
            <div className='newChat--head'>
                <div onClick={handleClose} className='newChat--backbutton'>
                    <ArrowBackIcon style={{color: '#FFF'}}/>
                </div>
                <div className='newChat--headtitle'>
                    Nova conversa
                </div>
            </div>
            <div className='newChat--list'>
                {list.map((item, key) => (
                    <div className='newChat--item' key={key}>
                        <img className='newChat--itemAvatar' src={item.avatar} alt="" />
                        <div className='newChat--itemName'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}