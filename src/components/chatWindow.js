import { useState, useEffect, useRef } from 'react';

import './chatWindow.css';

import EmojiPicker from 'emoji-picker-react';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

import MessageItem from './messageItem';

export default ({user}) => {
    // let recognition = false;
    // let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    // if (speechRecognition) {
    //     
    // }

    const body = useRef();

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [list, setList] = useState([
        {author: 123, body: 'text text'},
        {author: 123, body: 'text'},
        {author: 1234, body: 'text text text'},
        {author: 123, body: 'text text'},
        {author: 123, body: 'text'},
        {author: 1234, body: 'text text text'},
        {author: 123, body: 'text text'},
        {author: 123, body: 'text'},
        {author: 1234, body: 'text text text'},
        {author: 123, body: 'text text'},
        {author: 123, body: 'text'},
        {author: 1234, body: 'text text text'},
        {author: 123, body: 'text text'},
        {author: 123, body: 'text'},
        {author: 1234, body: 'text text text'},
        {author: 123, body: 'text text'},
        {author: 123, body: 'text'},
        {author: 1234, body: 'text text text'}
    ]);

    const handleEmojiClick = (emojiData, event) => {
        setText(text + emojiData.emoji)
    };

    const handleEmojiOpen = () => {
        setEmojiOpen(true);
    };

    const handleEmojiClose = () => {
        setEmojiOpen(false);
    };

    const handleSendClick = () => {

    };

    const handleMicClick = () => {
        
    };

    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    return (
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerinfo'>
                    <img className='chatWindow--avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt='' />
                    <div className='chatWindow--name'>Eduardo</div>
                </div>
                <div className='chatWindow--headerbuttons'>
                    <div className='chatWindow-btn'>
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className='chatWindow-btn'>
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className='chatWindow-btn'>
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>
            <div ref={body} className='chatWindow--body'>
                {list.map((item, key) => (
                    <MessageItem data={item} key={key} user={user} />
                ))}
            </div>
            <div className='chatWindow-emojiarea' style={{height: emojiOpen ? '300px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    skinTonesDisabled
                    searchDisabled
                    width="auto"
                />
            </div>
            <div className='chatWindow--footer'>
                <div className='chatWindow--pre'>
                    {emojiOpen &&
                        <div className='chatWindow-btn' onClick={handleEmojiClose}>
                            <CloseIcon style={{color: '#919191'}}/>
                        </div>  
                    }
                    <div className='chatWindow-btn' onClick={handleEmojiOpen}>
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688' : '#919191'}}/>
                    </div>
                </div>
                <div className='chatWindow--inputarea'>
                    <input 
                        className='chatWindow--input' 
                        type='text' 
                        placeholder='Digite uma mensagem'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className='chatWindow--pos'>
                    {text !== '' &&
                        <div className='chatWindow-btn' onClick={handleSendClick}>
                            <SendIcon style={{color: '#919191'}}/>
                        </div>
                    }
                    {text === '' && 
                        <div className='chatWindow-btn' onClick={handleMicClick}>
                            <MicIcon style={{color: '#919191'}}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}