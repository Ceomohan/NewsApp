import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

const WeatherNews = () => {

    const [search,setSearch] = useState("")
      const [newsData,setNewsData] = useState(null)
  
      const API_KEY ="449964ddf51846fcaf9d8f42dc672c12"
  
      const getData =  async ()=>{
          const response = await fetch(`https://newsapi.org/v2/everything?q="weather"&apiKey=${API_KEY}`)
  
          const data =  await response.json()
          console.log(data.articles)
          setNewsData(data.articles.slice(0,5))
      }
      
      useEffect(()=>{
          getData()
      },[])
  
  
      const handleInput = (e)=>{
          setSearch(e.target.value)
      }
  
      const userInput = (e)=>{
          setSearch(e.target.value)
      }
    return (
      <div>
         
  
  
          

          <div className="mt-2 mb-4">
            <h2 className="text-2xl text-slate-700 hover:text-blue-600 font-bold ">Weather News</h2>
          </div>
  
          <div>
              {newsData ? <Card  data={newsData}/> : null}
          </div>
      </div>
    )
}

export default WeatherNews