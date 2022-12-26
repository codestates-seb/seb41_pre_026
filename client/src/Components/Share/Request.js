import axios from "axios";
import { useEffect, useState } from "react";

const useRequest = (url, option) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(
      {
        url,
        method: option.method,
        data: option.data,
      },
      { withCredentials: true, timeout: 2000 }
    )
      .then((res) => res)
      .then((res) => {
        setData(res);
      })
      .catch((e) => setError(e));
  }, []);

  return { data, error };
};

export default useRequest;
