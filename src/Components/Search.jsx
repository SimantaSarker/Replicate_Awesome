import AlgoliaIcon from "../assets/algolia.svg";
const Search = () => {
  return (
    <div className="search-box flex justify-center items-center mt-9 mb-5">
      <button
        type="button"
        className="rounded-3xl px-3 w-7/12 border-2 border-black flex justify-between items-center"
      >
        <div>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search 26,233 icons..."
              className="text-lg px-2 py-5 outline-none font-semibold"
            />
          </div>
        </div>

        <div>
          <div className="flex p-3 space-x-3">
            Powered By
            <a href="https://www.algolia.com/developers/?utm_source=fontawesome&utm_medium=referral">
              <img src={AlgoliaIcon} alt="Algolia" className="w-6 h-6 ml-2 mr-2 " />
            </a>
            Algolia
          </div>
        </div>
      </button>
    </div>
  );
};

export default Search;
