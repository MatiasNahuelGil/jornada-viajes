import './Offer.css';

export default function Offer({ journey, city, price }) {

    const getBackgroundClass = (city) => {
        switch (city) {
            case 'Japón':
                return 'offer__cards--element offer__cards--japon';
            case 'San Andreas':
                return 'offer__cards--element offer__cards--san-andreas';
            default:
                return '';
        }
    };
    

    return (
        <article className={getBackgroundClass(city)}>
            <div className="offers__card">
                <div className="offers__card--content">
                    <p className="offers__card--destination-type">{journey}</p>
                    <h3 className="offers__card--destination-name">{city}</h3>
                    <p className="offers__card--price">{price}</p>
                    <a className="offers__card--button-text" href="#">Ver detalles</a>
                </div>
            </div>
        </article>
    );
}
