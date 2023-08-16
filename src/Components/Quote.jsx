import { Link } from 'react-router-dom';

export default function Quote({quote}) {
    return (
        <div>
            <Link to={`/quotes/${quote}`}>
                <Img className="quote-image"src={quote.image} alt={quote.quote} />
            </Link>
        </div>
    )
}