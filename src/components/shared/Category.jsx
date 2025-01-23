import literature from "../../assets/category/literature.png";
import socialScience from "../../assets/category/socialScience.png";
import appliedScience from "../../assets/category/appliedScience.png";
import artAndCreation from "../../assets/category/artAndRecreation.png";
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
      title: "Art & Recreation",
      image: [artAndCreation],
    },
  ];

  return (
    <section className="mb-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Select the category you are interested in
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className=" border border-gray-300 rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer category"
            >
              <img
                src={topic.image[0]}
                alt=""
                className="w-16 h-16 mb-4 opacity-50"
              />
              <h3 className="text-lg font-medium text-gray-800">
                {topic.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
