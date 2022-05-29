import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [userType, setUserType] = useState(null); // qual tipo de usuario (empresa, coordenador, aluno)

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method, type) => {
        // adicionar conta
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        }
        else if (method === "DELETE") {
            setConfig({
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            setMethod("DELETE");
            setItemId(data);
          }
    }

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try{
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            }catch(err){
                setError(err);
                console.log(err);
            }

            setLoading(false);
        };
        fetchData();
    }, [url, callFetch]);

    // 5 - refatorando post
    useEffect(() => {

        const httpRequest = async () => {
            if (method === "POST") {

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions);
                const json = await res.json();

                setCallFetch(json);

            }
            else if( method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`;

                const res = await fetch(deleteUrl, config);
                const json = await res.json();

                setCallFetch(json);
            }
        };

        httpRequest();
    }, [config, method, url]);

return { data, httpConfig, loading };

}
