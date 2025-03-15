import { Link } from 'react-router'

export default function Header() {

    return (
        <>
            <header>

                <h1><Link className='home' to='/'>Games Play</Link></h1>

                <nav>
                    <Link to='/games'>
                        All Games
                    </Link>

                    <div id="user">
                        <Link to='/create'>
                            Create Game
                        </Link>
                        <Link to='/logout'>
                            Logout
                        </Link>
                    </div>

                    <div id="guest">
                        <Link to='/login'>
                            Login
                        </Link>
                        <Link to='/register'>
                            Register
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}