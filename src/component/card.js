import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
const modal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function Card(props) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،");
  }
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal() {
    setModalIsOpen({ ...props });
  }

  return (
    <>
      <div
        className="m-2 shadow p-3 bg-base-200 text-base-content rounded-2xl flex h-min "
        onClick={props.onClickBtn}

      >
        <div className="flex flex-col justify-between">
          <img
            className="rounded-xl w-[107px]  self-start md:w-40  "
            src={props.img_src}
            alt="img"
          />
          {false ? (
            <button onClick={openModal}>{props.btn}</button>
          ) : (
            <Link to="/login">{props.btn}</Link>
          )}
        </div>

        <div className="flex flex-col w-full justify-between mr-5" 
        
        
        >
          <div className="w-fit ">
            <h2 className=" my-1 text-[17px] font-[500] text-base-content">
              {props.name}
            </h2>
            <p className="text-gray-500 text-[12px] font-normal text-ellipsis  h-[37px] overflow-hidden">
              {props.caption}
            </p>
          </div>

          <div className=" self-end font-bold m-2 ">
            {numberWithCommas(props.price)}{" "}
            <span className="text-[10px]">تومان</span>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "#00000034",
          },
        }}
        className="m-2  p-3 rounded-2xl flex font-v"
      >
        <motion.main
          class=" overflow-x-hidden"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div class="relative px-4 min-h-screen w-screen md:flex md:items-center md:justify-center">
            <div class=""></div>
            <div class="bg-base-100 rounded-lg md:w-1/2 md:h-[28rem] md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative md:flex md:flex-col md:justify-between">
              <div class="md:flex items-center">
                <div class="rounded-full flex items-center justify-center w-28 h-10 flex-shrink-0 mx-auto mb-10">
                  <i class="bx bx-error text-3xl ">
                    <img
                      className="rounded-xl self-start  border-2 border-yellow-100"
                      src={props.img_src}
                      alt="img"
                    />
                  </i>
                </div>
                <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-right m-5">
                  <p class="font-bold">{props.name}</p>
                  <p class="text-sm text-gray-500 mt-1">{props.caption}</p>
                </div>
              </div>
              <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                <button class="btn btn-ghost text-white block w-full hover:bg-black md:inline-block md:w-auto px-4 py-3 md:py-2 bg-base-content rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                  سفارش
                </button>
                <button
                  class="btn btn-ghost block w-full md:inline-block md:w-auto px-4 py-2 md:py-2 bg-base-200 rounded-lg font-semibold text-sm mt-4 md:mx-3 md:mt-0 md:order-1"
                  onClick={closeModal}
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        </motion.main>
      </Modal>
    </>
  );
}

export default Card;
