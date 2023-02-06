import { useState } from 'react';

import './newChat.css';
import { useEffect } from 'react';
import Api from '../Api';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({chatList, user, show, setShow}) => {
    const [list, setList] = useState([]);

    const handleClose = () => {
        setShow(false);
    };

    const addNewChat = async (user2) => {
        await Api.addNewChat(user, user2);

        handleClose();
    }

    useEffect(() => {
        const getList = async () => {
            if (user !== null) {
                let results = await Api.getContactList();
                setList(results);
            }
        };
        getList();
    }, [user]);

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
                    <div className='newChat--item' key={key} onClick={() => addNewChat(item)} >
                        <img className='newChat--itemAvatar' src={item.avatar} alt="" />
                        <div className='newChat--itemName'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}