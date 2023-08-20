import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { updateQuote, getQuote} from '../services/quotes';

export default function QuoteEdit() {
  const [quote, setQuote] = useState({
    quote: '',
    author: '',
    season: '',
    episode: '',
    image: ''
  })

  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    fetchQuote()
  }, [])

  async function fetchQuote() {
    const oneQuote = await getQuote(id)
    setQuote(oneQuote)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateQuote(id, quote)
    navigate(`/quotes`)
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
          type="text"
          placeholder="Please add your quote image URL"
          name="image"
          value={quote.image}
          onChange={handleChange}
        />
        <button type="submit">Edit your quote!</button>
      </form>
    </div>
  )
}