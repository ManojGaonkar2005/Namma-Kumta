import React from 'react'
import "./Photography.css"
import { PhotoData } from '../Data/Card'
const Photography = () => {
  return (
    <div className="Photography-Container">
    <div className="Section-Head">
            <img src="./Icons/Arrow-Back.png" alt="" />
            <a href="">Photography & Videography</a>
          </div>
          <div className="Full-Body-Content">
          {PhotoData.map((item) => (
            <div className="Contagary" key={item.id}>
              <div className="Contagary-upper">
                <div className="Contagary-Img">
                  <img src={item.image} alt="" />
                </div>
                <div className="Contagary-details">
                  <div className="Contagary-heading">{item.title}</div>
                  <div className="Contagary-info">{item.info}</div>
                    <div className="Contagary-Rating"> <span className="rating-number">{item.rating}</span>★</div>
                </div>
              </div>
              <div className="Contagary-lower">
                <button>More details</button>
              </div>
            </div>
          ))}
          </div>
          </div>
  )
}

export default Photography