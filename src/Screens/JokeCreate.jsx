import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createJoke } from '../services/quotes'

export default function QuoteCreate() {
    const [quote, setQuote] = useState({
        quote: '',
        author: '',
        season: '',
        episode: '',
        image: ''
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createQuote(quote)
        navigate('/quotes')
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setQuote((prevQuote) => ({
            ...prevQuote,
            [name]: value
        }))
    }

    return (
        <div>
            <h1>Add a quote to our database!</h1>
            <form className="create-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Please add your quote"
                name="quote"
                value={quote.quote}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="Author"
                name="author"
                value={quote.author}
                onChange={handleChange}
                />
                <input
                type="number"
                name="season"
                value={quote.season}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="Episode"
                name="episode"
                value={quote.episode}
                onChange={handleChange}
                />
                <input
                type="image"
                placeholder="Please add your quote image URL"
                name="image"
                value={quote.image}
                onChange={handleChange}
                />
                <button type="submit">Create Your Quote!</button>
            </form>
        </div>
    )
}