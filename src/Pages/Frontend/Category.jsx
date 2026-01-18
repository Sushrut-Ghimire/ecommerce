import React from 'react'
import FrontEndLayout from '../../layout/FrontEndLayout'
import { productList } from '../../Data'
import { Link, useParams } from 'react-router-dom'

function Category() {
  let {catId}=useParams()
  let fiter = productList.filter((a)=>a.category==catId)
  return (
    <FrontEndLayout>
      <section className='container mx-auto'>
        <h2>Category {catId}</h2>
        <div className="grid grid-cols-4 gap-5">
                            {fiter.map((a)=>(
                                <div className='shadow p-2 border'>
                                  <Link to={`/detail/${a.id}`}>
                                    <img src={a.thumbnail} alt="" />
                                    <p>{a.title}</p>
                                  </Link>
                                </div>
                            ))}
                        </div>
      </section>
    </FrontEndLayout>
  )
}

export default Category
