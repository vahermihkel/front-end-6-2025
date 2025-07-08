import { useEffect, useState } from "react"

function Tarnija3() {
  const [tooted, setTooted] = useState([]);

  // uef
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/react?page=0")
      .then(res => res.json())
      .then(json => setTooted(json.books))
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>URL</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map(toode => 
          <tr key={toode.isbn13}>
            <td>{toode.isbn13}</td>
            <td>{toode.title}</td>
            <td>{toode.price}</td>
            <td>{toode.subtitle}</td>
            <td><a href={toode.url}><button>Osta</button></a></td>
            <td><img style={{width:"50px", borderRadius:"10px"}} src={toode.image} alt="" /></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija3