import React from 'react'

const EditProfile = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    } 

  return (
    <div id='edit-profile'>
        <h2>edite seus dados</h2>
        <p className='subtitle'>escolha uma foto e fale sobre você</p>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nome'/>
            <input type='email'placeholder='E-mail' disabled />
            <label>
                <span>imagem do perfil</span>
                <input type='file' />
            </label>
            <label>
                <span>Bio:</span>
                <input type='text' placeholder='bio'/>
            </label>
            <label>
                <span>alterar senha</span>
                <input type='password' placeholder='senha'/>
            </label>
            <input type='submit' value='atualizar'/>
        </form>

    </div>
  )
}

export default EditProfile