import './Auth.css'
import {Link} from "react-router-dom"
import Message from "../../components/Massage"

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { login, reset } from '../../slices/authSlice'



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const {loading, error} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user ={
      email,password
    }

      dispatch(login(user))
  }

  useEffect(() => {dispatch(reset())}, dispatch)

  return (
    <div id='login'>
      <h2>reactGram</h2>
      <p className='subtitle'>faça o login</p>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={email || ''}/>
        <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ''}/>
        <input type='submit' value='Entrar'/>
      </form>
          {loading && <Message msg={error} type="error"/>}
      <p>não tem uma conta <Link to='/register'>criar conta</Link></p>
    </div>
  )
}

export default Login