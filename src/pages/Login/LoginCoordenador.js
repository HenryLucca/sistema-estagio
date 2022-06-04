import { useLogadoContext } from '../../hooks/useLogadoContext';
import { useFetch } from '../../hooks/useFetch';
import './LoginCoordenador.css'
import imagemCoordenador from '../../assets/coordenador.webp'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { AiOutlineMail ,AiOutlineFieldNumber } from 'react-icons/ai'
import { GrMapLocation } from 'react-icons/gr'
import { MdOutlineEmojiObjects,MdLocationCity } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'




const LoginCoordenador = () => {
  const { logado } = useLogadoContext();

  const { data: empresas } = useFetch('https://sistema-estagio-api.herokuapp.com/empresa');
  const { data: alunos } = useFetch('https://sistema-estagio-api.herokuapp.com/aluno');



  console.log(logado);

  return (
    <div class='mostView'>
      <div className='info-coordenador'>
       <img src ={imagemCoordenador}/> 
      <p> {logado.usuario}</p>
      </div>
      <div className='flex-coord'>
      <div class='alunos-coordenador'>
        <div className='h1Container1'>
      <h1>Alunos</h1>
      </div>
        <div>
          <ul className='lista-aluno'>
            {alunos &&
              alunos.map(aluno => (
                <li key={aluno.id} className='item-aluno'>
                  
                  <div className='aluno-component'> 
                    <IoPersonCircleOutline/>
                    <h3>{aluno.nome} </h3>                   
                  </div>

                  <div className='aluno-component'> 
                    <AiOutlineMail/>
                    <p>{aluno.email}</p>                    
                   </div>

                  <div className='aluno-component'> 
                    <AiOutlineFieldNumber/>
                    <p>{aluno.cpf}</p> 
                  </div>

                  <div className='aluno-component'> 
                    <GrMapLocation/>
                    <p>{aluno.endereco}</p> 
                  </div>

                  <div className='aluno-component'>
                     <MdOutlineEmojiObjects/>
                     <p>{aluno.situacao}</p> 
                  </div>

                </li>
              ))}
          </ul>
        </div>
      </div>


      <div className='empresas-coordenador'>
      <div className='h1Container2'>
      <h1>Empresas</h1>
      </div>
      <div>
        <ul className='lista-empresa'>
          {empresas &&
            empresas.map(empresa => (
              <li key={empresa.id} className='itemEmpresa'>
                
                
                <div className='aluno-component'> 
                  <MdLocationCity/>
                  <h3>{empresa.nome} </h3> 
                  </div>

                 <div className='aluno-component'> 
                   <AiOutlineMail/>
                   <p>{empresa.email}</p> 
                   </div>

                 <div className='aluno-component'> 
                  <AiOutlineFieldNumber/>
                   <p>{empresa.cpf}</p>   
                  </div>


                 <div className='aluno-component'>
                   <BsTelephone/>
                   <p>{empresa.telefone}</p>
                 </div>

              </li>
            ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

export default LoginCoordenador