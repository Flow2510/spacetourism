import './slider2.scss'
import { useState } from 'react'

export default function Slider2({image, name, technology, description, setTechno}){
    const [technoSelected, setTechnoSelected] = useState(0)

    return(
        <article className='slider2'>
            <img className='slider2__image' src={image} alt={name} />
            <div className='slider2__list'>
                {technology.map((tech, index) => (
                    <button className={`slider2__list-button${technoSelected === index ? ' slider2__list-button--selected' : ''}`} key={tech} onClick={ () => {setTechnoSelected(index); setTechno(index)}}>{index + 1}</button>
                ))}
            </div>
            <div className='slider2__content'>
                <span className='slider2__content-subtitle'>THE TERMINOLOGY...</span>
                <h2 className='slider2__content-title'>{name}</h2>
                <p className='slider2__content-description'>{description}</p>
            </div>
        </article>
    )
}