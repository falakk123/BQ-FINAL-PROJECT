import React from 'react'
import '../Components/loader.css'

export default function Loader() {
    return (
        <div className='bg-white d-flex justify-content-center align-items-center' style={{ width: '100%', height: '90vh' }}>
            <div className="loader">
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
                <div className="loader-square" />
            </div>
        </div>
    )
}
