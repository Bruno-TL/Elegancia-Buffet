import instagram from '../../assets/imgHome/instagram.png';


import './style.css';


export default function Contato() {
    return (
        <section>
            <h2>CONTATO</h2>
            <p>85 9934-4210 -- Meire </p>
            <div>
                <button>Fala pelo o WhatsApp</button>
                <img src={instagram}/>
            </div>
        </section>
    )
}