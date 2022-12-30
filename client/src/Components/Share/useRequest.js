import axios from "axios";
import { useEffect, useState } from "react";

function useRequest(endPoint, method, body = null) {
  const [data, setData] = useState([]);
  const url =
    "http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080";

  useEffect(() => {
    axios({
      method,
      url: `${url}${endPoint}`,
      data: body,
    })
      .then((res) => setData(res.data))
      .catch((e) => setData(e));
  }, [url, body, endPoint, method]);

  return data;
}

export default useRequest;
