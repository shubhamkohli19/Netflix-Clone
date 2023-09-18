import Featured from '../Components/Featured'
import List from '../Components/List'
import Navbar from '../Components/Navbar'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Featured/>
        <List title="Trending" fetchURL = {requests.requestTrending}/>
        <List title="Top Rated TV & Animes" fetchURL={requests.requestTVrated}/>
        <List title="The Classics" fetchURL={requests.requestMovieRated}/>
        <List title="Popular On Netflix" fetchURL={requests.requestPopular}/>
        <List title="TV On Air" fetchURL={requests.requestTVonAir}/>
        <List title="Arriving Soon" fetchURL = {requests.requestUpcoming}/>
    </>
  )
}

export default Home