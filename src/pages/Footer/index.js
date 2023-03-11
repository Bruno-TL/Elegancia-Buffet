
import instagram from '../../assets/imgHome/instagram.png';
import {FaViber, FaWhatsapp, FaAngleDoubleRight, FaInstagramSquare} from 'react-icons/fa';
import './style.css';

export default function Footer() {
    return (
        <section className='footer__section'>
            <h2 className='footer__titulo'>CONTATO</h2>
            <p className='footer__parag'>85 99934 - 4210 <FaAngleDoubleRight/>  Meire <FaViber/></p>
            <div className='footer__container'>
                <a href='https://api.whatsapp.com/send?phone=558599344210&text=Ol%C3%A1,%20Obrigado%20por%20entrar%20em%20contanto%20com%20a%20gente%20do%20Eleg%C3%A2ncia%20Buffet,%20em%20instantes%20a%20nossa%20Gerente%20de%20Eventos%20ir%C3%A1%20falar%20com%20voc%C3%AA' className='footer__a'>Falar por WhatsApp <FaWhatsapp/></a>
                <a href='https://www.instagram.com/buffetelegancia/' className='footer__a__img'>
                    <img src={instagram} className='footer__img'/>
                </a>
            </div>
            <h5 className='footer__h5'>create by: <a className='footer__h5__a'href='https://www.instagram.com/t.bruno__/'>@t.bruno__ <FaInstagramSquare/></a></h5>
        </section>

    );
}
