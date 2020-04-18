import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Article from './Article.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const MY_KEY = "bee79cb5ed624a84afb72ea6c06d4d69";

function App() {

  const [country, setCountry] = useState('ru');
  const URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${MY_KEY}`;

  const getNews = async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      console.log(data.articles);
      setNews(data.articles);
      setLoaded(true);
    } else {
      alert("Sorry, but something wrong happened. Error: " + response.status);
    }
  }

  const [loaded, setLoaded] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, [country]);

  if (loaded) {
    return (<div>
      <select name="Choose country" value={country} onChange={event => setCountry(event.target.value)} className="selectCountry">
        <option value="ru">Russia</option>
        <option value="us">USA</option>
        <option value="gb">Great Brirain</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
        <option value="cn">China</option>
      </select>
      {news.map((article, index) => (<Article key={article.author + index}
        title={article.title}
        description={article.description}
        text={article.content}
        image={article.urlToImage}
        author={article.author}
        date={article.date}
      />))}
    </div>)
  } else {
    return (<div>
      <div className="cssload-dots">
        <div className="cssload-dot"></div>
        <div className="cssload-dot"></div>
        <div className="cssload-dot"></div>
        <div className="cssload-dot"></div>
        <div className="cssload-dot"></div>
      </div>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" ></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo" ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix" ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);  
