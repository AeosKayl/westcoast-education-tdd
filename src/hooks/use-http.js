import { useEffect, useState } from "react";

const useHttp = (endpoint, method, headers, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await fetch(`http://localhost:3010/${endpoint}`, {
          method: method ? method : "GET",
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null,
        });

        setData(await resp.json());
      } catch (error) {
        setError(error);
      }
    };

    loadData();
  }, []);
  return { data, error };
};

export default useHttp;
