import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const DataLoader = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`https://library-management-server-iota.vercel.app/books/${id}`)
      .then((res) => setBooks(res.data));
  }, []);
  return books;
};

export default DataLoader;
