import './destination.scss'
import data from '../../../data.json'
import { useState } from 'react';

export default function Destination({image, onSelect, name, description, distance, travel}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const destinations = data.destinations;
    
    return(
        <div className='destination'>
            <img className='destination__image' src={image} alt={name} />
            <div className='destination__content'>
                <nav className='destination__nav'>
                    {destinations.map((des, index) => (
                        <button className={`destination__nav-button${selectedIndex === index ? ' destination__nav-button--selected' : ''}`} key={des.name} onClick={() => { onSelect(index); setSelectedIndex(index)}}>{des.name}</button>
                    ))}
                </nav>
                <h3 className='destination__name'>{name}</h3>
                <p className='destination__description'>{description}</p>
                <div className='destination__line'></div>
                <div className='destination__information'>
                    <div className='destination__distance'>
                        <p className='destination__distance-subtitle'>AVG. DISTANCE</p>
                        <h4 className='destination__distance-distance'>{distance}</h4>
                    </div>
                    <div className='destination__travel'>
                        <p className='destination__travel-subtitle'>EST. TRAVEL TIME</p>
                        <h4 className='destination__travel-travel'>{travel}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}