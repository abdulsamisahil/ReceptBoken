import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            ReceptBoken
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#nav-menu'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='nav-menu'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Sök Mat
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/my-favorites' className='nav-link'>
                  Min Favoritmat
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link'>
                  Kontakt
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>
                  Om
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
