import React, {useState, useEffect} from 'react';

const Hello = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/hello');
      console.log(response)
      const json = await response.json()
      setData(json.data)
    }
    getData();
  },[]);

  if (data === null) {
    return null
  } // don't render anything if data hasn't loaded

  return (
    <h1>{data}</h1>
  )
}

export default Hello;
