import { useLoaderData, useLocation } from "react-router-dom";
import BookCard from "../shared/BooksCard";

const CategoryBooks = () => {
  const booksList = useLoaderData();
  const location = useLocation();

  return (
    <>
      <section className="center resPadding  py-12">
        <div className="flex flex-col justify-center items-center mb-4">
          <h1 className="text-3xl font-medium">
            Explore category: {location.state}{" "}
          </h1>
          <h2 className="text-gray-600">
            There&apos;s something for everybody
          </h2>
        </div>
        {/* all book list */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
          {booksList.map((book) => (
            <BookCard key={book._id} bookData={{ book }}></BookCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryBooks;
