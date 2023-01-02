import axios from "axios";
import { useEffect } from "react";

const useRequest = (url, option) => {
  useEffect(() => {
    axios({
      method: option.method,
      responseType: "json",
      url: url,
      body: option.body,
      headers: {
        "Access-Control-Allow-Origin": "origin",
      },
    })
      .then((res) => res.json())
      .catch((e) => e);
  }, [url, option]);
};

export default useRequest;
