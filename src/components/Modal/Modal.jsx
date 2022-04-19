import React, { useEffect, useState } from 'react';
import st from './modal.module.css';
import Input from '../input/input';

const Modal = (props) => {

    const [current, toggleModal] = React.useState({
        active : true
    })

    const closeModal = () => {
        toggleModal ({
            active : false,
        })
        console.log('скрыть')
    }

    const showModal = () => {
        toggleModal ({
            active : true,
        })
        console.log('показать')
    }

    const body = document.querySelector('body')

    const modalRef = React.createRef();

    React.useEffect(() => {
        current.active === true ? 
        body.classList.add('modal-active') : 
        body.classList.remove('modal-active')

        document.addEventListener('keydown', (e) => {
            if( e.key === "Escape") {
                closeModal()
            }
        });
    })

    

    return (
        <>
        <div style={{position: 'absolute', zIndex: '2'}}>
            <button onClick={() => closeModal()}>&times;</button>
            <button onClick={() => showModal()}>показать</button>
        </div>
        <section className={`${st.modal} ${current.active === true ? st.show : st.hide}`}>
            <span className={st.modal__backdrop} onClick={() => closeModal()}></span>
            <div className={st.modal__content}>
                <div className="modal__header">
                    <p>{props.children}</p>
                    
                    <button onClick={() => closeModal()}>&times;</button> 
                </div>
                <div className="modal__body">
                    тут тело
                    <Input type='text' spanDescription='Ваше имя'/>
                </div>
                <div className="modal__footer">
                    тут футер
                </div>
            </div>
        </section>
        </>
    )
}

export default Modal;