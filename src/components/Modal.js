import React from 'react'
import ReactDom from 'react-dom'
import { useNavigate } from 'react-router-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'rgb(240, 240, 240)',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    height: '553px',
    width: '750px',
    borderRadius: '10px'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal({ children}) {

    const navigate = useNavigate()
    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button className='bg-gray-500 rounded-full' style={{ marginLeft: "45rem", marginTop: "-35px", float: "left " }} onClick={()=>navigate('/')}> <img src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-cancel-24px'%20clip-path='url(%23clip0_1_2255)'%3e%3cpath%20id='Vector'%20d='M14%202.33331C7.54838%202.33331%202.33337%207.54831%202.33337%2014C2.33337%2020.4516%207.54838%2025.6666%2014%2025.6666C20.4517%2025.6666%2025.6667%2020.4516%2025.6667%2014C25.6667%207.54831%2020.4517%202.33331%2014%202.33331ZM19.8334%2018.1883L18.1884%2019.8333L14%2015.645L9.81171%2019.8333L8.16671%2018.1883L12.355%2014L8.16671%209.81164L9.81171%208.16665L14%2012.355L18.1884%208.16665L19.8334%209.81164L15.645%2014L19.8334%2018.1883Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2255'%3e%3crect%20width='28'%20height='28'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" /></button>
                <div className='rounded shadow'>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('addPost-root')
    )
}