import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Beer = () => {
    const [beer, setBeer] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    const getBeer = async()=>{
        const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
    })

  
  
  return (
    <div>
        <h2>Cerveza numero {params.id}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>

  )
}

export default Beer