import { useEffect, useState } from "react";

const useHttp = (endpoint, method, headers, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await fetch(`http://localhost:3010/${endpoint}`, {
          method: method ? method : "GET",
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null,
        });

        if (!resp.ok) {
          throw new Error("Request failed!");
        }

        setData(await resp.json());
      } catch (error) {
        setError(error.message || "Something went bad!");
      }
    };

    loadData();
  }, []);
  return { data, error };
};

export default useHttp;
