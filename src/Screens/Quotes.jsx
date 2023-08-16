import { useState, useEffect } from 'react';
import { getJokes } from '../Services/quotes';
import Quote from '../Components/Quote';

export default function Jokes() {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        fetchJokes()
    }, [])

    async function fetchJokes() {
        const allJokes = await getJokes();
        setJokes(allJokes)
    }

    return (
        <div>
            <h1>All the quotes!</h1>
            <div className="jokes-container">
                {jokes.map((quote) => (
                    <Joke joke={quote} key={quotes.quote} />
                ))}
            </div>
        </div>
    )
};
