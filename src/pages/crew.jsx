import Slider from '../components/slider/slider'
import './crew.scss'
import data from '../../data.json'
import { useState } from 'react';

export default function Crew() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const changeMember = (index) => {
        setSelectedIndex(index);
    }

    return(
        <section className='crew'>
            <h2><span>02</span>MEET YOUR CREW</h2>
            <Slider 
                category={data.crew[selectedIndex].role}
                name={data.crew[selectedIndex].name}
                description={data.crew[selectedIndex].bio}
                image={data.crew[selectedIndex].images.webp}
                crew={data.crew}
                onSelect={changeMember}
            />
        </section>
    )
}