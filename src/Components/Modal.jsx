import React from 'react'
import './modal.style.css'

function Modal({props, toggleModal}) {
  return (
    <div className="modal-container">
        <div className="modal">
        <div className="button-close" onClick={() => toggleModal(false)}>x</div>
        <p style={{fontWeight: 'bold'}}>{props.nome}</p>
        <p><span style={{fontWeight: 'bold'}}>Descrição: </span> {props.descricao}</p>
        <p><span style={{fontWeight: 'bold'}}>Avaliação: </span>{props.avaliacao}</p>
        <p><span style={{fontWeight: 'bold'}}>Localização: </span> {props.local}</p>
        <button className='button-see'>Ver pratos</button>
        </div> 
    </div>
    
  )
}

export default Modal