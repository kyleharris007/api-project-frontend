import { Link } from 'react-router-dom';

export default function Quote({quote}) {
    return (
        <div>
            <Link to={`/quotes/${quote._id}`}>
                <img className="quote-images" src={quote.image} alt={quote.quote} />
            </Link>
        </div>
    )
}