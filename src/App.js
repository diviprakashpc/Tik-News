import { useEffect, useState } from "react";
import "./App.css";
import NavInShort from "./components/NavInShort";
import Axios from "axios";
import NewsContent from "./components/NewsContent/NewsContent";
import Footer from "./components/Footer/Footer";
function App() {
  const [category, setCategory] = useState("sports");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore,setLoadMore] = useState(25);
  useEffect(() => {
    newsApi(); //eslint-disable-next-line
  }, [category, newsResults,loadMore]);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      const news = await Axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${loadMore}&apiKey=${process.env.REACT_APP_API_KEY} `
      );
      if (news) {
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <NavInShort setCategory={setCategory}></NavInShort>
      <NewsContent setLoadMore = {setLoadMore} loadMore = {loadMore} newsArray={newsArray} newsResults={newsResults} />
      <Footer/>
    </div>
  );
}

export default App;
