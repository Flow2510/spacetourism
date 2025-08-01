import Slider2 from '../components/slider2/slider2'
import './technology.scss'
import data from '../../data.json'
import { useState } from 'react';

export default function Technology(){
    const [selectedIndex, setSelectedIndex] = useState(0);
    const changeTechno = (index) => {
        setSelectedIndex(index);
    }

    return(
        <>
            <div className='background-technology'></div>
            <section className='technology'>
                <h2 className='technology__title'><span>03</span>SPACE LAUNCH 101</h2>
                <Slider2 
                    image={data.technology[selectedIndex].images.portrait}
                    name={data.technology[selectedIndex].name}
                    technology={data.technology}
                    description={data.technology[selectedIndex].description}
                    setTechno={changeTechno}
                />
            </section>
        </>
        
    )
}