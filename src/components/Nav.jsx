import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quotes">Quotes</NavLink>
            <NavLink to="/add-quote">New Quote</NavLink>
        </nav>
    )
};

