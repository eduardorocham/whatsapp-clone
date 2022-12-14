import './chatIntro.css';
import introImage from '../assets/images/intro-image.jpg'

export default () => {
    return (
        <div className='chatIntro'>
            <img src={introImage} alt='' />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O whatsapp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi</h2>
        </div>
    )
}