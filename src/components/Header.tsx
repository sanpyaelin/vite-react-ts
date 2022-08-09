import reactLogo from 'assets/react.svg'

function Header() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h2>
        Vite + React + Typescript + Eslint + Prettier + Husky + Airbnb
        JavaScript Style Guide
      </h2>
    </>
  )
}

export default Header
