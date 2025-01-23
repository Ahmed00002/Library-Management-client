import BookCard from "./BooksCard";

const PopularBooks = () => {
  const categories = ["Story", "Fairy", "Jokes", "history"];
  return (
    <>
      <div className="mt-24">
        <div className="space-y-2">
          <h1 className="text-3xl font-medium text-gray-700">
            Our popular book collections
          </h1>
          <p className="text-sm">
            Our library&apos;s line of collection that have been favoured by our
            users were shown here. Look for them. Borrow them. Hope you also
            like them
          </p>
        </div>
        {/* category buttons */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 my-4">
          {categories.map((category) => {
            return (
              <>
                <button className="px-4 py-1 rounded-full border bg-transparent hover:bg-gray-50">
                  {category}
                </button>
              </>
            );
          })}
        </div>

        {/* books container */}
        <div className="grid grid-cols-6 gap-2 my-41">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </>
  );
};

export default PopularBooks;
