import React, { useEffect, useState } from 'react';
import getResults from '../utils/peticion2';

const Entradas = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const response = await getResults();
            setData(response.data.posts.nodes);
        }

        getData();
        
    }, [])

    console.log(data);
  return (
    <div>
       {data.map((post) => {
        return <div className="entrada" key={post.title}>
                    <div className="entrada-info">
                        <h1>{post.title}</h1>
                        <h1>post.content</h1>
                    </div>
                </div>
    })}
    </div>
  )
}

export default Entradas
