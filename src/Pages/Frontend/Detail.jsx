import React from 'react'
import { Routes, useParams } from 'react-router-dom'
import { productList } from '../../Data'
import FrontEndLayout from '../../layout/FrontEndLayout'

function Detail() {
    let {id} = useParams()
    let find = productList.find((a)=>a.id==id)
  return (
    <FrontEndLayout>
<section>
  <div className="container mx-auto py-2">
    <h2>{find.title}</h2>
    <img src={find.thumbnail} alt="" />
  </div>
</section>
    </FrontEndLayout>
  )
}

export default Detail
