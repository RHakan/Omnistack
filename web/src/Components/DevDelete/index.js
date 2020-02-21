import React from 'react';
import api from '../../services/api';


function DevDelete (dev){
    async function handleDelDev(e){
        e.preventDefault();
        let response = await api.delete(`/devs/${dev.dev}`);
        console.log(dev);
        
        response = await api.get('devs');
        
    }
return (
    <button onClick={handleDelDev}>Deletar</button>
);
};

export default DevDelete;