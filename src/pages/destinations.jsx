import Destination from '../components/destination/destination'
import './destinations.scss'
import data from '../../data.json'
import { useState } from 'react';

export default function Destinations() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const changeDestination = (index) => {
        setSelectedIndex(index);
    }

    return(
        <section className='destinations'>
            <h2 className='destinations__title'><span className='destination__title-span'>01</span>PICK YOUR DESTINATION</h2>
            <Destination
                image={data.destinations[selectedIndex].images.webp}
                name={data.destinations[selectedIndex].name}
                description={data.destinations[selectedIndex].description}
                distance={data.destinations[selectedIndex].distance}
                travel={data.destinations[selectedIndex].travel}
                onSelect={changeDestination}
            />
        </section>
    )
}