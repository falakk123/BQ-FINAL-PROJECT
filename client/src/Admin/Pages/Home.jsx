import React from 'react'
import '../../Admin/Pages/home.css'
import { BiCategoryAlt } from 'react-icons/bi'

export default function Home() {
  return (
    <>
     <h1 className='text-center' style={{fontFamily:'bold'}}>Admin Portal</h1>
     <div className='pt-3 d-flex' style={{}}>
     <div className="card">
        <a className="card1" href="#">
          <p><h1 style={{fontFamily:'italic'}}>Products <BiCategoryAlt /></h1></p>
          <p className="text-seccondary">
            <h2 style={{fontFamily:'italic'}}>
           Total Products : {29}
           </h2>
           <p>
           There is nothing like the enjoyment that comes from learning new makeup techniques. We all have our beauty regimens to match our style, and makeup is genuinely a miraculous tool for transformation and enhancement: it is both powerful and life-changing. Rather than shying away from the radiance of our true selves
           </p>
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>

      <div className="card">
        <a className="card1" href="#">
          <p><h1 style={{fontFamily:'italic'}}>Category <BiCategoryAlt /></h1></p>
          <p className="text-seccondary">
            <h2 style={{fontFamily:'italic'}}>
           Total Category : {10}
           </h2>
           <p>
           There is nothing like the enjoyment that comes from learning new makeup techniques. We all have our beauty regimens to match our style, and makeup is genuinely a miraculous tool for transformation and enhancement: it is both powerful and life-changing. Rather than shying away from the radiance of our true selves
           </p>
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>

     </div>

     <div className='pt-3 d-flex justify-centent align-items-space-between'>
     <div className="card">
        <a className="card1" href="#">
          <p><h1 style={{fontFamily:'italic'}}>Brands <BiCategoryAlt /></h1></p>
          <p className="text-seccondary">
            <h2 style={{fontFamily:'italic'}}>
           Total Products : {11}
           </h2>
           <p>
           There is nothing like the enjoyment that comes from learning new makeup techniques. We all have our beauty regimens to match our style, and makeup is genuinely a miraculous tool for transformation and enhancement: it is both powerful and life-changing. Rather than shying away from the radiance of our true selves
           </p>
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>

      <div className="card">
        <a className="card1" href="#">
          <p><h1 style={{fontFamily:'italic'}}>Orders <BiCategoryAlt /></h1></p>
          <p className="text-seccondary">
            <h2 style={{fontFamily:'italic'}}>
           Total Orders : {8}
           </h2>
           <p>
           There is nothing like the enjoyment that comes from learning new makeup techniques. We all have our beauty regimens to match our style, and makeup is genuinely a miraculous tool for transformation and enhancement: it is both powerful and life-changing. Rather than shying away from the radiance of our true selves
           </p>
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>

     </div>



    </>
  )
}
