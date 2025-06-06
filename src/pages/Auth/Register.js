import './Auth.css'

import {Link} from 'react-router-dom'

import {useState,useEffect} from 'react'

import { register, reset } from '../../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import { Message} from '../../components/Massage'

const Register = () => {

  const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch();

  const {loading, error} = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const user = {
      name,email,password,confirmPassword
    }

    console.log(user)

    dispatch(register(user))
  }

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="register">
      <h2>
        <p className='subtitle'>Cadastrar-se</p>
        <form onSubmit={handleSubmit}>
          <input type="type" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name || ""}/>
          <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
          <input type='password' placeholder='Senha'onChange={(e) => setPassword(e.target.value)} value={password || ""}/>
          <input type='password' placeholder='Confirme a senha'onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ""}/>
          <input type='submit' placeholder='cadastrar'/>
          {!loading && <input type='submit' value="Cadastrar"/>}
          {loading && <Message msg={error} type="error"/>}
        </form>
        <p>
          já tem conta? <Link to='/login'>click aqui</Link>
        </p>
      </h2>
    </div>
  )
}

export default Register