// Exports

import Head from 'next/head'
import Navbar from "../components/Navbar"
import Card from '../components/Card'
import Tag from '../components/Tag'
import CardS from '../components/CardS'

export default function Home() {
  return (
    <>
    <div className="slogan" align = "center">
        SciencePlanet. Get all fresh science news.
        <Card />
        <div className="message1" align = "center">
        Explore more articles and forums.
        </div>Name
        <div className="tags">
          <Tag tag="#mathematics" />
          <Tag tag="#biology" />
          <Tag tag="#history" />
          <Tag tag="#science" />
          <Tag tag="#physics" />
          <Tag tag="#politics" />
          <Tag tag="#philosophy" />
        </div>
        <div className='feed' align="center">
        <h1 className = "slogan">Reach all conference news from our communities!</h1>
         <div className='lists'>
         <div className = "list" id="reddit">Our Reddit Community</div>
            <div className = "list" id="github">Our GitHub Organization</div>
            <div className = "list" id="twitter">Our Twitter Page</div>
            <div className = "list" id="instagram">Our Instagram Page</div>
            <div className = "list" id="discord">Our Discord Server</div>
         </div>
        </div>
        <div className="email-notify" align = "center">
        <h1 className="slogan">Enter your e-mail for to receive last articles!</h1>
        <form action="/email-notify" type = "POST" className="notify">
            <h1 style = {{ color : "white", fontSize : "30px" }}>Newspaper Center</h1>
          <input name = "email-notify" placeholder="Enter e-mail" /><br />
          <button>Submit</button>
        </form>
    </div>
    <h1 className="slogan">Latest articles</h1>
     <div className='cards-container'>
       <CardS />
       <CardS />
       <CardS />
     </div>
    </div>
    </>
  )
}
