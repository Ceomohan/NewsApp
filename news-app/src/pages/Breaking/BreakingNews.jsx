import React , {useState,useEffect} from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

const BannerNews = () => {

  const [newsData, setNewsData] = useState(null)

  const API_KEY = "449964ddf51846fcaf9d8f42dc672c12"

  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q="breaking news"&apiKey=${API_KEY}`)

    const data = await response.json()
    console.log(data.articles)
    setNewsData(data.articles.slice(0,4))
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div>
        <div className="mt-2 mb-4">
          <h2 className="text-2xl text-slate-700 hover:text-blue-600 font-bold  ">Breaking  News</h2>
        </div>

        <div>
            {newsData ? <Card  data={newsData}/> : null}
        </div>
    </div>
  )
}

export default BannerNews