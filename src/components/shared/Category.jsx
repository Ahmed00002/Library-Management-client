import literature from "../../assets/category/literature.png";
import socialScience from "../../assets/category/socialScience.png";
import appliedScience from "../../assets/category/appliedScience.png";
import artAndCreation from "../../assets/category/artAndRecreation.png";
import { Link } from "react-router-dom";
const Category = () => {
  const topics = [
    {
      id: 1,
      title: "Literature",
      image: [literature],
    },
    {
      id: 2,
      title: "Social Sciences",
      image: [socialScience],
    },
    {
      id: 3,
      title: "Applied Sciences",
      image: [appliedScience],
    },
    {
      id: 4,
      title: "Art and Recreation",
      image: [artAndCreation],
    },
  ];

  return (
    <section className="mb-10">
      <div className="center resPadding mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Select the category you are interested in
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {topics.map((topic) => (
            <Link
              state={topic.title}
              to={`/books/category/${topic.title}`}
              key={topic.id}
            >
              {" "}
              <div className=" border border-gray-300 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer category">
                <img
                  src={topic.image[0]}
                  alt=""
                  className="w-16 h-16 mb-4 opacity-50"
                />
                <h3 className="text-lg font-medium text-gray-800">
                  {topic.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
