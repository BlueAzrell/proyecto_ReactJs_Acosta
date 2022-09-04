import React from "react"

export const Parts = ({title, img, price}) => {
  return (
    <article>
   <h3>{title}</h3>
   <h3>${price}</h3>

   <img src= {img} alt="" style={{width: "15rem"}} />
   </article>
  )
}
export default Parts