import React, { useEffect, useState } from 'react'
import './home.style.css'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'


function index() {


    

    return (
        <>
            <div className='container-main'>
                <div className='content-container'>
                    <div className='texts'>
                        <h1>Catálogo</h1>
                        <h2> DE RESTAURANTES</h2>
                        <p>Encontre por aqui os restaurantes, seu cardápio e suas avaliações!</p>
                        <button className='btn' ><Link style={{textDecoration: 'none', color: '#fff'}} to={'/restaurants'}>VER RESTAURANTES</Link></button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default index