import "./styles.css"
import { SocialIcon } from 'react-social-icons'

function MidiaIcons ()  {
    return (
        <div className="container-social-midia">
            <SocialIcon network='instagram' url="https://www.instagram.com/udhymaas/" style={{width: 30, height: 30}} />
            <SocialIcon url="https://www.threads.net/?hl=pt-br" bgColor="#ffff" fgColor="#000" style={{width: 30, height: 30}} /> 
        </div>
    );
};

export default MidiaIcons;