import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-4'>
          <h2 className='text-warning'>Recept Boken</h2>
          <p>Denna applikation anpassar sig till alla enheter</p>
          <h3 className='mt-4'>Sidor</h3>
          <p>Recept-bokens olika sidor</p>
          <ul className='nav nav-pills flex-column'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Sök mat
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/my-favorites'>
                Mina favoriter
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link disabled' to='/contact'>
                Kontakt
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                Om
              </Link>
            </li>
          </ul>
          <hr className='d-sm-none' />
        </div>
        <div className='col-sm-8'>
          <h5>Uppbyggdes Maj 2022</h5>
          <p>
            Denna sida används för att tillhandahålla en gratis recept online i
            hopp om att ni som lagar och bakar kan göra välsmakande mat
          </p>
          <h2 className='mt-5'>Kontakt</h2>
          <p>E-postadress: recept-boken@receptboken.se</p>
          <p>Mobil: +46 (0) 700 2465164</p>
          <p>Adress: Receptgatan 46 Malmö Sverige</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
