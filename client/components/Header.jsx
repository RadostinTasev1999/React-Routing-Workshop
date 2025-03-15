import { Link } from 'react-router'

export default function Header(){

    return(
        <>
        <header>
            
            <h1>
                <Link to='/' class="home" >
                GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to='/content'>
                All games
                </Link>
                
            <div id="user">
                <Link to='/create'>Create Game</Link>
                <Link to='/logout'>Logout</Link>
            </div>
                
            <div id="guest">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
            </div>
            </nav>
        </header>
        </>
    )
}