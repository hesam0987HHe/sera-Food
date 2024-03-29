import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Tabs from "./component/tab.js";
import ShopCard from "./component/shopCart.js";
import Login from "./component/login.js";
import Card from "./component/card.js";
import { useState, useEffect } from "react";
import axios from "axios";
import SignUp from "./component/signUp.js";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "./component/Navbar.js";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export function CardApi() {
  const [loading, setLoading] = useState(false);

  const btnBuy = (a) => {
    axios
      .post(
        `https://react-api-66b61-default-rtdb.firebaseio.com/shopCard.json`,
        data[a]
      )
      .then((response) => response)
      .catch((err) => console.log(err));
    //
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://react-api-66b61-default-rtdb.firebaseio.com/list/-Np-LoK0kQUsjQ5hpzCX.json"
        );
        setData(response.data);
        setLoading(false); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);
  let i = [2, 5, 5, 5, 5];
  return loading ? (
    <div className="container sm:grid lg:grid-cols-3">
      {i.map((i, index) => (
        <div
          className="m-2  p-3 bg-base-100 text-base-content rounded-2xl flex  h-min"
          key={index}
        >
          <div>
            <Skeleton
              width={80}
              height={80}
              containerClassName="avatar-skeleton"
            />
            <Skeleton width={80} height={25} className="mt-3" />
          </div>
          <div className="flex flex-col w-full justify-between mr-5">
            <div className="">
              <h2 className=" my-1">
                <Skeleton width="50%" />
              </h2>
              <p className="text-base-content text-[12px] font-normal text-ellipsis  h-[37px] overflow-hidden">
                <Skeleton width="90%" count={2} />
              </p>
            </div>

            <div className=" self-end font-bold m-2 ">
              <Skeleton width={80} />
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <motion.div
      className="container sm:grid lg:grid-cols-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {data.map((i, index) => (
        <motion.div variants={item} className="" key={index}>
          <Card
            id={i.id}
            name={i.tabTitle}
            caption={i.title}
            price={i.price}
            img_src={i.img_src}
            onClickBtn={() => btnBuy(i.id)}
            btn={<label className="btn btn- btn-sm  mt-2 w-full">سفارش</label>}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}






const App = () => {
  return (
    <div className="mx-3 mt-10 md:mx-[12rem]">
      <AnimatePresence mode="wait">


        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/shopCart" element={<ShopCard />} />
            <Route path="/app" element={<Tabs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Route>
        </Routes>


      </AnimatePresence>
    </div>
  );
};
export default App;
