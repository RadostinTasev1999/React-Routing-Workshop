import { useContext } from 'react'
import { Link } from 'react-router'
import { UserContext } from '../../src/contexts/UserContext'

export default function Header() {

    const { email } = useContext(UserContext)

    return (
        <>
            <header>

                <h1><Link className='home' to='/'>Games Play</Link></h1>

                <nav>
                    <Link to='/games'>
                        All Games
                    </Link>

                    {
                        email 
                          ? (
                            <div id="user">
                                <Link to='/create'>
                                    Create Game
                                </Link>
                                <Link to='/logout'>
                                    Logout
                                </Link>
                            </div>
                        )
                        :
                        (
                                <div id="guest">
                                    <Link to='/login'>
                                        Login
                                    </Link>
                                    <Link to='/register'>
                                        Register
                                    </Link>
                                </div>
                        )
                            
                    }

                    

                    
                </nav>
            </header>
        </>
    )
}