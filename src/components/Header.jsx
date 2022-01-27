function Header({ text1, text2 }) {
  return (
    <header className="border-b-2 border-blue-darkest">
      <div className="container flex">
        <h2>
          {text1}
          <span className="text-orange-darkest"> {text2}</span>{' '}
        </h2>
      </div>
    </header>
  )
}

export default Header
