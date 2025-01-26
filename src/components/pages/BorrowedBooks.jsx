import { useEffect, useState } from "react";
import { axiosSecure } from "../hooks/useAxiosSecure";
import useAuthContext from "../hooks/useAuthContext";
import BorrowedBookCard from "../shared/BorrowedBooksCard";
import { FaRegSadCry } from "react-icons/fa";
import axios from "axios";

const BorrowedBooks = () => {
  //   const [bookData, setBookData] = useState([]);
  const [BorrowedBookData, setBorrowedBookData] = useState([]);
  const { user } = useAuthContext();
  console.log(user);

  //   get borrowed books of user through the email
  useEffect(() => {
    axiosSecure
      .get(`/user/borrowed?email=${user?.email}`)
      .then((res) => setBorrowedBookData(res.data));
  }, [user?.email]);

  //   handle return book
  const handleReturn = (id) => {
    axiosSecure.post();
  };

  return (
    <>
      <section className="py-12 min-h-screen">
        <h1 className="text-center text-2xl font-medium">Borrowed Books</h1>
        <div className="flex justify-between items-center center resPadding pb-4">
          <h1 className="font-medium">All Books That You Borrowed </h1>
          <p>Available to return: {BorrowedBookData.length}</p>
        </div>
        {/* no books message */}
        <div
          className={`${
            BorrowedBookData.length !== 0 ? "hidden" : "block"
          } text-center space-y-4  flex flex-col justify-center items-center mt-12`}
        >
          <FaRegSadCry className="text-blue-500 text-6xl mx-auto" />
          <h1 className="text-lg font-bold text-gray-400">
            You Haven&apos;t borrowed any book yet
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-2 center resPadding">
          {BorrowedBookData.map((book) => (
            <BorrowedBookCard key={book._id} props={{ book, handleReturn }} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BorrowedBooks;
