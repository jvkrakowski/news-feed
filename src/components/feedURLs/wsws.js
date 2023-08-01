import { useEffect, useState } from 'react';

export default function Wsws() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://api.rss2json.com/v1/api.json?api_key=kiu9hxfe1661vn0cmz3jpj8dueorj0idmiucugqr&rss_url=https://www.wsws.org/en/rss.xml`);
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
                              <h3>{item.title}</h3>
                          </a>
                      </div>
                  ))}
              </ul>
              <a
                  href={"https://www.wsws.org/"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
              >
                  Read More on World Socialist Website
              </a>
          </div>
      </section>
        )}
      </div>
    )

   
    
}
