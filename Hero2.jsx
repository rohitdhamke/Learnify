// Hero2.jsx
import React from 'react'
import Card from './Card'
import './Hero2.css'
import img1 from './assets/mumunivercity-img.jpeg'
import img2 from './assets/delhiuni-img.jpeg'
import img3 from './assets/puneuni-img.png'
import img4 from './assets/newyorkuni-img.png'

const Hero2 = () => {
    return (
        <div className='hero2'>

            <Card
                className="big-img"
                image={img1}
                title='Mumbai University'
                button='View Notes | Question Papers | Syllabus'
            />

            <Card
                className="big-img"
                image={img2}
                title='Delhi University'
                button='View Notes | Question Papers | Syllabus'
            />

            <Card
                className="small-img"
                image={img3}
                title='Savitribai Phule Pune University'
                button='View Notes | Question Papers | Syllabus'
            />

            <Card
                className="small-img"
                image={img4}
                title='University of The State of New York'
                button='View Notes | Question Papers | Syllabus'
            />

        </div>
    )
}

export default Hero2
