import React from 'react'
import backgroundImage from "../../../src/assets/asset 0.jpeg"
import asset01 from "../../../src/assets/asset 1.jpeg"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <div className='w-full h-screen'>
                <div className='absolute z-[0] top-60 px-36'>
                    <h1 className=' font-DancingScript text-6xl text-white'>Fast Food Restaurant</h1>
                    <p className='mt-3 mb-4 w-6/12 text-white'>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                    <Link className=' text-xl px-4 w-40 py-1.5 h-11 rounded-full text-center
                    bg-yellow-500'>Order Online</Link>
                </div>
                <img className='h-screen w-full bg-cover' src={backgroundImage} alt="" />
            </div>
            <br />
            <div className="w-full flex justify-around">
                <div className='w-1/3 rounded-lg p-2 bg-gray-800 flex justify-around items-center'>
                    <img className='w-52 bg-center border-4 border-yellow-500 rounded-full' src={asset01} alt="" />
                    <div>
                        <h1 className='text-white font-DancingScript text-2xl'>Tasty Thursdays</h1>
                        <br />
                        <h2 className='text-white font-DancingScript text-3xl'>20% Off</h2>
                        <br />
                        <Link className=' text-xl px-4 w-40 py-1.5 h-11 rounded-full text-center
                    bg-yellow-500'>Order Online</Link>
                    </div>
                </div>
                <div className='w-1/3 rounded-lg p-2 bg-gray-800 flex justify-around items-center'>
                    <img className='w-52 bg-center border-4 border-yellow-500 rounded-full' src={asset01} alt="" />
                    <div>
                        <h1 className='text-white font-DancingScript text-2xl'>Tasty Thursdays</h1>
                        <br />
                        <h2 className='text-white font-DancingScript text-3xl'>20% Off</h2>
                        <br />
                        <Link className=' text-xl px-4 w-40 py-1.5 h-11 rounded-full text-center
                    bg-yellow-500'>Order Online</Link>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home
