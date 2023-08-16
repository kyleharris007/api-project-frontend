import { useState, useEffect } from 'react';
import { getQuotes } from '../services/quotes';
import Quote from '../components/Quote';

export default function Quotes() {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetchQuotes()
    }, [])

    async function fetchQuotes() {
        const allQuotes = await getQuotes();
        setQuotes(allQuotes)
    }

    return (
        <div>
            <h1>All the quotes!</h1>
            <div className="quotes-container">
                {quotes.map((quote) => (
                    <Quote quote={quote} key={quotes.quote} />
                ))}
            </div>
        </div>
    )
};
