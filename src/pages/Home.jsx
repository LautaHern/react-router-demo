import { Link } from '../Link.jsx'

export default function HomePage () {
    return (
      <>
        <h1>Home Page</h1>
        <p>Página de ejemplo</p>
        <Link to='/about'>Ir a Sobre Nosotros</Link>
      </>
    )
  }