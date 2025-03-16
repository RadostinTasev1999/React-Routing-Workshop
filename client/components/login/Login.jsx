import { Link } from 'react-router'
import { useNavigate } from 'react-router'

export default function Login(
    {userLogin}
){

    const navigate = useNavigate();
    
    const onLogin = (formData) => {

        const email = formData.get('email')
        const password = formData.get('password')

        userLogin(email)

        console.log('Email is:', email, 'Password is:', password)

        navigate('/')

    }


    return (
        <section id="login-page" className="auth">
            <form action={onLogin} id="login">
                {/* action - URL or function
                    when a function is passed to the action, the function will handle the form submission.
                    the function passed to action will be called with a single argument containing the form data
                    of the submitted form.

                */}

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com"/>

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password"/>
                    <input type="submit" className="btn submit" value="Login"/>
                    <p className="field">
                        <span>If you don't have profile click <Link to={'/register'}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}