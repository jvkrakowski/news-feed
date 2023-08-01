import { useEffect, useState } from 'react';

export default function Wsws() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://api.rss2json.com/v1/api.json?api_key=kiu9hxfe1661vn0cmz3jpj8dueorj0idmiucugqr&rss_url=https://rss.nytimes.com/services/xml/rss/nyt/US.xml`);
                const data = await res.json();
                const items = data.items.slice(0, 20);
                setItems(items);
            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);


    return (
      <div>
        {error ?(
          <h2>an error has occurred</h2>

        ):(
          <section>
          <div>
              <ul>
                  {items.map((item, index) => (
                      <div key={index}>
                          <a href={item.link} target={"_blank"}>
                              <h3 className="article-title">{item.title}</h3>
                          </a>
                          <span className="pubdate">Published On {item.pubDate}</span>
                      </div>
                  ))}
              </ul>
              <a
                  href={"https://www.nytimes.com/"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
              >
                  Read More on New York Times
              </a>
          </div>
      </section>
        )}
      </div>
    )

   
    
}
