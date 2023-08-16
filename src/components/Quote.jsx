import { Link } from 'react-router-dom';

export default function Quote({quote}) {
    return (
        <div>
            <Link to={`/quotes/${quote}`}>
                <img className="quote-images" src={quote.image} alt={quote.quote} />
            </Link>
        </div>
    )
}