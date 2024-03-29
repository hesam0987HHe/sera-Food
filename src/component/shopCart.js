import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
const cont = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function ShopCard() {
  function Card(props) {
    return (
      <div className="m-2 shadow p-3 bg-base-200 text-base-content rounded-2xl flex  h-min ">
        <div className="flex flex-col justify-between">
          <img
            className="rounded-xl w-[107px]  self-start md:w-40 "
            src={props.img_src}
            alt="img"
          />

          <label
            className="btn btn-error btn-sm  mt-2 w-full"
            onClick={(e) => btnDelApi(props.index, e)}
          >
            {btn_load}
          </label>
        </div>
        <div className="flex flex-col w-full justify-between mr-5">
          <div className="w-fit ">
            <h2 className=" my-1 text-[17px] font-[500] text-base-content">
              {props.name}
              {ShopCard.btn_load}
            </h2>
            <p className="text-base-content text-[12px] font-normal text-ellipsis  h-[37px] overflow-hidden">
              {props.caption}
            </p>
          </div>

          <div className=" self-end font-bold m-2 ">
            {numberWithCommas(props.price)}
            <span className="text-[10px]">تومان</span>
          </div>
        </div>
      </div>
    );
  }
  const [Btnloading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shop, setShop] = useState([]);
  let [keyname, setKeyname] = useState([]);
  let cardKey = [];

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://react-api-66b61-default-rtdb.firebaseio.com/shopCard.json")
      .then((response) => {
        Object.keys(response.data).forEach((key) => {
          cardKey.push(key);
          setKeyname(cardKey);
        });
        if (
          typeof response.data === "object" &&
          !Array.isArray(response.data)
        ) {
          const shopArray = Object.values(response.data);
          setShop(shopArray);
          setLoading(false);
        } else {
          console.error(
            "Error: response.data is not an object or is already an array"
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const sumprice = shop.reduce((pp, cc) => {
    return pp + cc.price;
  }, 0);

  const btnDelApi = (i, e) => {
    console.log(e);
    setBtnLoading(true);
    const itemId = keyname[i];
    axios
      .delete(
        `https://react-api-66b61-default-rtdb.firebaseio.com/shopCard/${itemId}.json`
      )
      .then((response) => {
        const updatedShop = shop.filter((item, index) => index !== i);
        setShop(updatedShop);
        console.log(response);
        setBtnLoading(false);
      })
      .catch((err) => console.log(err));
    setKeyname(keyname.filter((n) => n != itemId));
  };
  let i = [0, 3, 4, 5, 2, 8, 5, 4, 5];

  let btn_load = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );

  return (
    <div>
      <motion.div
        className="transition-none vvvvv"
        variants={cont}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

        {loading ? (
          <div className="container sm:grid lg:grid-cols-3">
            {i.map((i , index) => (
              <div className="m-2  p-3 bg-base-100 text-base-content rounded-2xl flex  h-min" key={index}>
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
          <div className="mt-5">
            {shop.length == 0 ? (
              <>
                <div className="flex items-center flex-col h-[50vh] justify-center">
                  در حال حاضر محصولی در سبدخرید ندارید؟
                  <Link
                    to="/"
                    className=" hover:text-blue-600 font-bold px-2 py-2 rounded"
                  >
                    افزودن محصول
                  </Link>
                </div>
              </>
            ) : (
              <motion.div className="mb-52 sm:grid lg:grid-cols-3" 
              variants={container}

              >
                {shop.map((i, index) => (
      <motion.div 
      variants={item}
      key={index}
      >
                   <Card
                    id={i.id}
                    name={i.tabTitle}
                    caption={i.title}
                    price={i.price}
                    index={index}
                    img_src={i.img_src}
                  />
                 </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
      <div className="fixed bottom-5 inset-x-5 h-min md:mx-[12rem] z-50">
        <div className="bg-slate-300 text-black p-2 rounded-xl flex flex-col justify-between transform-none">
          <div className=" m-2 my-5">
            <span className="text-[15px] ml-1  py-5">مبلغ کل :</span>
            {loading ? (
              "درحال محاسبه.."
            ) : (
              <span>
                {numberWithCommas(sumprice)}

                <span className="text-[10px ] mr-1">تومان</span>
              </span>
            )}
          </div>
          <div className="btn m-1 my-2 text-white">تسویه</div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
