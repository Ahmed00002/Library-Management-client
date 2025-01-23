import Category from "../shared/Category";
import HomeSwiper from "../shared/HomeSwiper";
import PopularBooks from "../shared/PopularBooks";

const Home = () => {
  return (
    <>
      <header className="">
        <div className="relative mb-24">
          <HomeSwiper />
          <div className=" w-full lg:w-8/12 mx-auto absolute bottom-0 translate-y-1/2 z-10  left-1/2 -translate-x-1/2 center resPadding">
            <div className="bg-white p-2 rounded-lg  shadow-md ">
              <label className="flex items-center gap-2">
                <input
                  type="text"
                  className="grow p-2 border-none outline-none"
                  placeholder="Search by category"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* books category */}
      <section className="center resPadding">
        <Category />
      </section>

      <section className="center resPadding">
        <PopularBooks />
      </section>
    </>
  );
};

export default Home;
