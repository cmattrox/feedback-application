function Header({ text }) {
  return (
    <header className="border-b-[1px] border-white">
      <div className="container">
        <h2 className="text-green-theme text-4xl">{text}</h2>
      </div>
    </header>
  )
}

export default Header
