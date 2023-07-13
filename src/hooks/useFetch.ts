import Student from "@/model/Student";
import { connectToUserDataDB } from "@/backend/mongodb/connect"
import { useState, useEffect } from "react";

export async function validateStudent(url: string, student: Student) {

  const [data, setData] = useState(student);

  useEffect(() => {
        fetch("/api/validateUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ student })
        })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
      }, []);

      return data;

      // const [data, setData] = useState(initialData);
      // const [loading, setLoading] = useState(false);
      // const [error, setError] = useState(false);
    
      // useEffect(() => {
      //   setLoading(true);
      //     fetch(url)
      //         .then((response) => response.json())
      //         .then((data) => setData(data))
      //         .catch(() => setError(true));
      //     setLoading(false);
      // }, [url]);
    
      // return {data, loading, error};
};
  