import './chatListItem.css';

export default ({onClick}) => {
    return (
        <div className='chatListItem' onClick={onClick}>
            <img className='chatListItem--avatar' src='https://www.w3schools.com/howto/img_avatar2.png' alt=''></img>
            <div className='chatListItem--lines'>
                <div className='chatListItem--line'>
                    <div className='chatListItem--name'>Eduardo Rocha</div>
                    <div className='chatListItem--date'>19:00</div>
                </div>
                <div className='chatListItem--line'>
                    <div className='chatListItem--lastMsg'>
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}