import { useState } from 'react'
import './slider.scss'

export default function Slider({category, name, description, image, crew, onSelect}) {
    const [memberSelected, setMemberSelected] = useState(0)

    return(
        <div className='slider'>
            <div className='slider__content'>
                <span className='slider__content-category'>{category}</span>
                <h2 className='slider__content-name'>{name}</h2>
                <p className='slider__content-description'>{description}</p>
                <div className='slider__dots'>
                    {crew.map((member, index) => (
                        <button className={`slider__dots-dot${memberSelected === index ? ' slider__dots-dot--selected' : ''}`} key={index} onClick={() => {onSelect(index); setMemberSelected(index)}}></button>
                    ))}
                </div>
            </div>
            <img className='slider__image' src={image} alt={name} />
        </div>
    )
}