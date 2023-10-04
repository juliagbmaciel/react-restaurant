import React, { useEffect, useState } from 'react'
import Modal from '../../Components/Modal'
import './restaurantes.style.css'
import axios from 'axios'

function index() {

    const [data, setData] = useState([])
    const [toggleModal, setToggleModal ] = useState(false)
    const [itemClicked, setItemClicked] = useState({})

    const getData = async () => {
        const { data } = await axios.get("http://127.0.0.1:8000/api/restaurants")
        setData(data)
    }

    useEffect(() => {
        getData();

    }, [])


    function teste(item){
        setItemClicked(item)
        setToggleModal(true)
    }



    return (
        <div className='container-main'>
            <div className="content-rest">
                <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column', width: '800px',height:"100%"}}>
                    <h1>Restaurantes</h1>
                    {data.length === 0 && <p>Carregando...</p>}
                    <div className="container-cards">
                        {data && data.map((item) => {
                            return (
                                <div className="card-container" key={item.id} onClick={() => teste(item)}>
                                    <div className="image">
                                        <img src={item.imagem} alt="" />
                                    </div>
                                    <div className="name">
                                        <p style={{fontFamily: 'Inter', textAlign: 'center', fontWeight:'bold'}}>{item.nome}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {toggleModal && (<Modal props={itemClicked} toggleModal={setToggleModal}/>)}


            
        </div>
    )
}

export default index