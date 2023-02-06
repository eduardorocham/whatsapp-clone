import './login.css';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { authentication } from '../firebaseConfig';

export default ({onReceive}) => {
    const handleFacebookLogin = async () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider).
            then((result) => {
                onReceive(result.user);
                console.log(result.user);
            }).
            catch((error) => {
                console.log(error)
            });
    };

    return (
        <div className='login'>
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    )
}