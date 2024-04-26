import React from 'react'
import aboutImg from '../../../src/assets/asset 12.png'
function About() {
    return (
        <>
            <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
                <div className='w-1/2 flex  justify-center items-center'>
                    <img className='w-3/5' src={aboutImg} alt="" />
                </div>
                <div className='w-1/2  h-screen flex justify-center flex-col '>
                    <h1 className='text-3xl font-DancingScript text-white'>We Are Feane</h1>
                    <p className='mt-3 text-lg w-3/4 text-white'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                    </p>
                    <input className='bg-yellow-500 mt-3 w-40 h-10 rounded-md text-xl text-white' type="button" value="Read More" />
                </div>
            </div>
        </>
    )
}

export default About
