import { useState } from 'react'
import './Login.css'
import { login } from '../../config/auth'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setProfile } from '../../store/profile/slice'


const Login = () => {

    const [ data, setData ] = useState({
        username: "",
        password: ""
    })

    const dispatch = useDispatch()
    const router = useNavigate()

    const submitLogin = async () => {
        try {
            const res = await login(data)
            if(res) {
                localStorage.setItem('accessToken', res.accessToken)
                dispatch (setProfile({name: res.name, surneme: res.sername}))
                router('/invoices')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='login__box'>
        <div className='login__title__block'>
            <h2 className='login__title'>Login</h2>
        </div>
        <div className='login__inputs_block'>
            <input onChange={event => setData(prev => ({...prev, username: event.target.value}))} type='text' className='login__input' placeholder='user name' />
            <input onChange={event => setData(prev => ({...prev, password: event.target.value}))} type='password' className='login__input' placeholder='password' />
            <button onClick={() => submitLogin()} className='login__submit_btn'>Login</button>
        </div>

    </div>
  )
}

export default Login