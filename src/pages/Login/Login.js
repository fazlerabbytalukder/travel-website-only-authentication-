import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInWithGoogle, signInWithGithub} = useAuth();
    return (
        <div>
            <div>
                <input type="text" placeholder='email' /> <br />
                <input type="password" placeholder='Password' /><br />

                <input type="submit" />
            </div>
            <button onClick={signInWithGoogle}>sign in with google</button>
            <button onClick={signInWithGithub}>sign in with github</button>
        </div>
    );
};

export default Login;