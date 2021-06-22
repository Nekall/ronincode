import { useState, useEffect } from 'react'
import Cookies from "js-cookie";

const useFetch = (method = "GET", payload) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const doFetch = async (url) => {
    const cookie = Cookies.get("token");
    const options = {
      method,
      headers: {
        Authorization: `${cookie}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    };
    if (payload) {
      options.body = JSON.stringify(payload);
    }
    try {
      const response = await fetch(`https://ronincode.herokuapp.com/${url}`, options);
      const responseContent = await response.json();
      setData(responseContent);
    } catch (error) {
      setError(error.message);
    }
  }

  /*useEffect(() => {
    doFetch();
  }, [url]);*/

  return { data, error, doFetch };
}

export default useFetch;
