// Exports

import Head from 'next/head'
import Navbar from "../components/Navbar"
import Card from '../components/Card'
import Tag from '../components/Tag'
import CardS from '../components/CardS'

export default function Home() {
  return (
    <>
    <div class="slogan" align = "center">
        SciencePlanet. Get all fresh science news.
        <Card />
        <div class="message1" align = "center">
        Explore more articles and forums.
        </div>
        <div class="tags">
          <Tag tag="#mathematics" />
          <Tag tag="#biology" />
          <Tag tag="#history" />
          <Tag tag="#science" />
          <Tag tag="#physics" />
          <Tag tag="#politics" />
          <Tag tag="#philosophy" />
        </div>
        <div class="email-notify" align = "center">
        <h1 class="slogan">Enter your e-mail for to receive last articles!</h1>
        <form action="/email-notify" type = "POST" class="notify">
            <h1 style = {{ color : "white", fontSize : "30px" }}>Newspaper Center</h1>
          <input name = "email-notify" placeholder="Enter e-mail" /><br />
          <button>Submit</button>
        </form>
    </div>
    <h1 class="slogan">Latest articles</h1>
     <div className='cards-container'>
       <CardS />
       <CardS />
       <CardS />
     </div>
    </div>
    </>
  )
}
