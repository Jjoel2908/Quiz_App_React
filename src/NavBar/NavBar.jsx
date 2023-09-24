import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-blue-950 py-5 flex justify-center'>
      <NavLink to='/'>
        <h1 className='text-fuchsia-600 text-3xl font-bold hover:scale-110 transition-all duration-500' >Quiz 
        <span className='text-sky-300'> App</span>
        </h1>
      </NavLink>
    </nav>
  )
}

export default NavBar