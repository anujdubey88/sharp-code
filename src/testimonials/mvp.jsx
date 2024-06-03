import React from 'react'
import MvpCard from './mvpcard'
import "./mvp.css"

export default function MVP() {
  return (
    <div>
      <h1 className="ourcourses">TESTINOMIALS</h1>
      <div className='testinomial__main__container'>
        <div className="grid">
          <div className="card1">
            <MvpCard
              name="Anuj Dubey"
              detail="Senior Manager is a high-level executive who oversees the operations and performance of one or more departments within a company. Senior Managers are responsible for developing and implementing strategies that align with the companys overall goals and objectives. They are expected to lead and motivate their team to achieve high levels of productivity and efficiency"
            />
          </div>
          <div className="card1">
            <MvpCard
              name="Aditya Sharma"
              detail="Senior Manager is a high-level executive who oversees the operations and performance of one or more departments within a company. Senior Managers are responsible for developing and implementing strategies that align with the companys overall goals and objectives. They are expected to lead and motivate their team to achieve high levels of productivity and efficiency"
            />
          </div>
          <div className="card1">
            <MvpCard
              name="Keshav Arora"
              detail="Senior Manager is a high-level executive who oversees the operations and performance of one or more departments within a company. Senior Managers are responsible for developing and implementing strategies that align with the companys overall goals and objectives. They are expected to lead and motivate their team to achieve high levels of productivity and efficiency"
            />
          </div>
          <div className="card1">
            <MvpCard
              name="Anuj Dubey"
              detail="Senior Manager is a high-level executive who oversees the operations and performance of one or more departments within a company. Senior Managers are responsible for developing and implementing strategies that align with the companys overall goals and objectives. They are expected to lead and motivate their team to achieve high levels of productivity and efficiency"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
