import React from 'react'
import "../assets/css/Header.css"
import iconoCarrito from "../assets/static/carrito.png"
import iconoVolver from "../assets/static/volver.png"
export default function Header() {
  return (
    <>
      <a href="carrito.html"><img src={iconoCarrito} alt="" className="carritou"/></a>
          <a href=""><img src={iconoVolver} alt="" className="volver"/></a>

        <h1 className="titulo">
          Dev <br />
          Rosses Store
        </h1>  
    </>
  )
}
