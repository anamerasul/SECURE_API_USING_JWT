import React, { useEffect } from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const SocialLogin = ({ url }) => {

    console.log(url)


    const path = `/login`
    const uri = `${url}${path}`


    const user2 = auth.currentUser
    const email = user2?.email

    console.log(email)
    console.log(user2?.email)

    // console.log(user2)
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    // console.log(user?.email)

    const location = useLocation()
    let from = location.state?.form?.pathname || '/'

    console.log(from);

    let errorElement;


    const socialSignUpIn = async () => {

        if (loading || loading1) {
            return <Loading></Loading>
        }

        if (error || error1) {
            errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        }

        if (user || user1) {
            // navigate(from, { replace: true })

            const { data } = await axios.post(uri, { email })
            console.log(!!data)

            if (!!data) {
                localStorage.setItem('accessToken', data);
                console.log(data);

                if (!!localStorage.getItem('accessToken')) {
                    navigate(from, { replace: true });

                }



            }



            console.log()
            // navigate(from, { replace: true });
        }


    }


    socialSignUpIn()

    // useEffect(() => {



    //     if (user) {
    //         navigate(from, { replace: true })
    //     }

    // }, [user])

    // if (user2) {
    //     window.location.href = location.state?.form?.pathname || '/'
    // }

    // console.log(location?.state?.form?.pathname)

    // console.log(user2)















    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;