import { useActionState,useContext } from 'react';
import { Link } from 'react-router'
import { useLogin } from '../../src/api/authApi';
import { UserContext } from '../../src/contexts/UserContext';

export default function Login(){

    //const navigate = useNavigate();

    const { login } = useLogin();
    const {userLoginHandler} = useContext(UserContext)

    const loginHandler = async(_, formData) => {

        // previousState - current state of the form. The first time the form is submitted, this will be the initial state you provided
        // previousState = {email: '', password: ''}

        const values = Object.fromEntries(formData)


        const authData = await login(values.email, values.password)

        console.log('Result is:', authData)

        // userLogin(values.email)

        // navigate('/games');

        userLoginHandler(authData)

        return values

    }

    const [_, loginAction, isPending] = useActionState(loginHandler,{email: '', password: ''});
    /*
    loginHandler - the function to be called when the form is submitted or button pressed.
                 - when the function is called,it will receive the previous state of the form as its initial argument,
                   followed by thearguments that a form action normally receives
    
    initialState - the value you want the stateto be initially.

    useActionState returns an array with the following values:

      - current state. During the first render, it will match the initial state you have passed. After the action is invoked,
        it will match the value returned by the action.

     - a new action that you can pass as the action prop to your form component or formAction prop to any button component within
       the form.

    - the isPending flag that tells you whether there is a pending Transition.
    */
    
   // console.log('useActionState current state value is:', values)


    /*
    useActionState - Hook that allows you to update state based on the result of a 
                    form action
                    - creates a component state that is updated when a form action is invoked.
                    - we pass useActionState an existing form action function and initial state
                      and it returns a new action that you use in your form, along with the latest
                      form state and whether the Action is still pending

    */
   


    return (
        <section id="login-page" className="auth">
            <form action={loginAction } id="login">
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
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to={'/register'}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}