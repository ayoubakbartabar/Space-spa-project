import React from 'react'
import { useEffect , useState } from 'react'
import './Technology.css'



export default function Technology() {
    const [technology , setTechnology] = useState([])
    const [technologyName , setTechnologyName] = useState("Launch vehicle")
    const [technologyinfo , setTechnologyInfo] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
    const [technologyImage , setTechnologyImage] = useState("/assets/image/technology/image-launch-vehicle-portrait.jpg")


    useEffect(()=>{

      fetch('data.json')
      .then(res=>res.json())
      .then(datas=>{
        setTechnology(datas.technology)
      })
    })

    const technologyHandeler = (data) =>{
      
      
      setTechnologyName(data.name)
      setTechnologyInfo(data.description)
      setTechnologyImage(data.images.portrait)

    }

    return (
      <div className='technology-container'>
        
        <h3 className="technology-header"> 03 Space launch 101 </h3>
        
        <picture className='technology-image-container'>
            <img className='technology' src={technologyImage} alt={technologyName} />
        </picture>

        <div className="technology-btn-container">
            {technology.map((data)=>(
              <button onClick={() => technologyHandeler(data)} key={data.name} className='technology-btn'>{data.id}</button>
            ))}
        </div>
        
        <article className="technology-info-container">
          <h4 className="technology-info-header">The terminology...</h4>
          <h1 className="technology-name">{technologyName}</h1>
          <p className="technology-info">{technologyinfo}</p>
        </article>

      </div>
    )
}
