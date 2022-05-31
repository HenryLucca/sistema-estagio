import {useContext} from 'react';
import {LogadoContext} from '../context/usuarioLogadoContext';

export const useLogadoContext = () => {

    const context = useContext(LogadoContext);

    if(!context){
        console.log('Contexto não encontrado');
    }
    if(context == null){
        console.log('Contexto nulo');
    }

    return context;
}