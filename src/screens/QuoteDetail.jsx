import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getQuote, deleteQuote } from '../services/quotes'

export default function QuoteDetail() {
    const [quote, setQuote] = useState({})

    let { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetchQuote()
    }, [])

    async function fetchQuote() {
        const oneQuote = await getQuote(id)
        setQuote(oneQuote)
    }

    async function handleDelete() {
        await deleteQuote(id)
        navigate('/quotes')
    }

    return (
        <div>
            <h1>{quote.quote}</h1>
            <h2>{quote.author}</h2>
            <h3>{quote.season}</h3>
            <h3>{quote.episode}</h3>
            <img src={quote.image} alt={quote.quote} />
            <div>
                <Link to={`/quotes/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}