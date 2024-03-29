import React, { useState } from "react";
import { CardApi } from "../app";
import { motion } from "framer-motion";

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
const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle1: "فست فود",
      content: <CardApi grouping={"فست فود"} />,
    },
    {
      id: 2,
      tabTitle1: "نوشیدنی",
      content: <CardApi grouping={"نوشیدنی"} />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <motion.div className=""
    variants={cont}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <div className="tabs tabs-boxed snap-mandatory snap-x flex-nowrap max-w-full overflow-x-scroll my-5  carousel rounded-xl mx-2 bg-base-200 ">
        {tabs.map((tab, i) => (
          <button
            className="tab snap-start min-w-[100px] relative disabled:rounded-lg  disabled:bg-base-content disabled:text-base-100 "
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle1}
          </button>
        ))}
      </div>
      <div className="content flex flex-col flex-wrap w-full">
        {tabs.map((tab, i) => (
          <div className="flex flex-col flex-wrap items-center" key={i}>
            {currentTab === `${tab.id}` && (
              <div className="container ">{tab.content}</div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Tabs;
