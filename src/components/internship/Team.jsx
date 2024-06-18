import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import "../about/about.css"
import Faq from "../faq/Faq"


const Team = () => {
  return (
    <>
      <Back title='Training-cum-Internship' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <div className="morecourse">
        <h1>More Courses Coming Soon</h1>
      </div>
      <Faq/>
    </>
  )
}

export default Team;
