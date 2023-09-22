import React, { useEffect, useState } from 'react'
import './restaurantes.style.css'
import axios from 'axios'

function index() {

    const [data, setData] = useState([])

    const getData = async () => {
        const { data } = await axios.get("http://127.0.0.1:8001/restaurants")
        setData(data)
    }

    useEffect(() => {
        getData();

    }, [])



    data.map((item) => {
        console.log('Item tal:', item.image)
    })

    return (
        <div className='container-main'>
            <div className="content-rest">
                <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                    <h1>Restaurantes</h1>
                    {data.length === 0 && <p>Carregando...</p>}
                    <div className="container-cards">
                        {data && data.map((item) => {
                            return (
                                <div className="card-container" key={item.id}>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="name">
                                        <p style={{fontFamily: 'Inter', textAlign: 'center'}}>{item.nome}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>



            </div>


        </div>
    )
}

export default index