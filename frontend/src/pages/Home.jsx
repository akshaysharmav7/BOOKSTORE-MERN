import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] =useState('table');
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowType('table')}>
          Table Mode
        </button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowType('Card')}>
          Cards Mode
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-4">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-blue-700 text-4xl border" />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table'?(<BooksTable books={books} />):(<BooksCard books={books}/>)}
    </div>
  );
};

export default Home;
