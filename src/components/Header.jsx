import { Link } from "react-router-dom"
import { categoryList } from "../Data"

function Header(){


    return(
        <>
        <header className="bg-blue-400 py-6 mx-auto text-white text-2xl text-center relative">This is Header</header>
        <nav className="bg-black flex mx-auto justify-center items-center text-white">
            <ul className="flex list-none justify-evenly items-center gap-4 ">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                {categoryList.slice(0,9).map(a => <Link to = {`/Category/${a.slug} `}>{a.name}</Link> )}
                <li><Link to = "/contact">Contact</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Header