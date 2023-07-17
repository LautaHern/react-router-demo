import { Link, navigate } from '../Link.jsx'


export default function AboutPage () {
    return (
      <>
        <h1>About Page</h1>
        <div>
          <img src="https://pbs.twimg.com/profile_images/1643892455635394561/4bCmoJn-_400x400.jpg" alt="Foto de Laucha" />
          <p>Página de ejemplo</p>
        </div>
        <Link to='/'>Ir al inicio</Link>
      </>
    )
  }