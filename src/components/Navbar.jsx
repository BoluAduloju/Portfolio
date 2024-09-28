


const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home" className="mx-2 font-medium text-stone-200">BoluAduloju.</a>
      </div>
      <a href="https://drive.google.com/file/d/1KCqyzadWk5Bje-zvMxUjCrAuwdILmjyY/view" target="_blank" rel="noopener noreferrer" download className="bg-stone-50 rounded-md px-3 py-2 text-sm text-stone-800 hover:bg-stone-200">Resume</a>
   </nav>
  )
}

export default Navbar