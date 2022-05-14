import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='text-center p-3'>
          © 2022 Copyright:
          <Link className='text-dark m-2' to='/'>
            receptboken.se
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
