import { Link } from 'react-router-dom';
import casamento from '../../assets/imgHome/casamento.png';
import infantil from '../../assets/imgHome/infantil.png';
import debutante from '../../assets/imgHome/debutante.png';
import outros from '../../assets/imgHome/outros.png';
import './style.css';

export default function Home() {
    return (
        <section className='section__home'>
            <h2 className='section__home__titulo'>EVENTOS</h2>
            <div className='section__home__container'>
                <div className='section__home__container__caixa'>
                    <img className='img__eventos' src={casamento}/>
                    <Link className='link__eventos' to='/casamento'>Casamentos</Link>
                </div>

                <div className='section__home__container__caixa'>
                    <Link className='link__eventos' to='/infantil'>Infantil</Link>
                    <img className='img__eventos' src={infantil}/>
                </div>

                <div className='section__home__container__caixa'>
                    <img className='img__eventos' src={debutante}/>
                    <Link className='link__eventos' to='/debutante'>Debutantes</Link>
                </div>

                <div className='section__home__container__caixa'>
                    <Link className='link__eventos' to='/outros'>Outros</Link>
                    <img className='img__eventos' src={outros}/>
                </div>
            </div>
        </section>
    )
}