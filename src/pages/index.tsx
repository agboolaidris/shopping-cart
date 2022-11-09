import type { NextPage } from "next";
import Header from "../components/molecules/header";

const Home: NextPage = () => {
  return (
    <div className="mx-auto container ">
      <Header />
      <div className="columns-2 lg:columns-4 mt-5">
        <div className="bg-red-500 h-[200px] w-[200px] m-5"></div>
      </div>
    </div>
  );
};

export default Home;
