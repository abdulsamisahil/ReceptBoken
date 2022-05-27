import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='mt-5 p-4 text-dark text-center'>
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
