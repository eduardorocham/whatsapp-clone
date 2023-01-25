import './messageItem.css';

export default ({data, user}) => {
    return (
        <div className='messageLine' style={{
            justifyContent: data.author === user.id ? 'flex-end' : 'flex-start'
        }}>
            <div className='messageItem' style={{
                backgroundColor: data.author === user.id ? '#DCF8C6' : 'FFF'
            }}>
                <div className='messageText'>{data.body}</div>
                <div className='messageDate'>15:00</div>
            </div>
        </div>
    )
}