import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/Auth/AuthContext'
import { Images, Img } from './style'
import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.png'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import img8 from '../../imgs/img8.png'

export const Private = () => {
  const auth = useContext(AuthContext)

  const images = [`${img1}`, `${img2}`, `${img3}`, 
    `${img4}`, `${img5}`, `${img6}`,
    `${img7}`, `${img8}`
  ]

  return (
    <div>
      <h2>PRIVATE PAGE</h2>
      <hr />
      <p>Ola, {auth.user?.name}</p>
      <hr />
      <Images>
        {images.map((item, index) => (
          <Img src={item} key={index} />
        ))}
      </Images>

    </div>
  )
}

// SNIPPET ARROW FUNCTION: RAFC