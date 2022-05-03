import { GetStaticProps } from "next"
import { getDisplayName } from "next/dist/shared/lib/utils"


export const getStaticProps = async() =>{
    
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await posts.json()
    return {
      props: {
          articles : data
      }, 
    }
  }


export default function CardS({ articles }){
    console.log(articles)
    return(
        <div class="card2">
            <div class = "title">
                {articles}
            </div>
            <div class = "body">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut arite cillum dolore eu fugiat nulla pariatur.
            </div>
            <br />
            <button>Read article</button>
         </div>
    )
}
  