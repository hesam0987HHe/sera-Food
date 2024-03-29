import { Link } from "react-router-dom";

//test
function Home() {
  return (
    <div
    >
      <div className="flex flex-col flex-wrap mt-5 ">
        <h2 className="m-2 mt-3 font-bold">دسته بندی</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <Link
            to="/app"
            className=" m-2 shadow  bg-[url('https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg')] bg-cover text-[#897c7ddd] text-center rounded-2xl flex justify-start items-end h-36"
          >
            <h1 className=" wate bg-base-100 p-2 rounded-tl-2xl w-24 rounded-br-xl">
              فست فود
            </h1>
          </Link>
          <Link
            to="/app"
            className=" m-2 shadow  bg-[url('https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg')] bg-cover text-[#897c7ddd] text-center rounded-2xl flex justify-start items-end h-36"
          >
            <h1 className=" wate bg-base-100 p-2 rounded-tl-2xl w-24 rounded-br-xl">
              {" "}
              ایرانی
            </h1>
          </Link>
          <Link
            to="/app"
            className=" m-2 shadow  bg-[url('https://cdn.snappfood.ir/uploads/images/tags/website_image_sokhari_1.jpg')] bg-cover text-[#897c7ddd] text-center rounded-2xl flex justify-start items-end h-36"
          >
            <h1 className=" wate bg-base-100 p-2 rounded-tl-2xl w-24 rounded-br-xl">
              سوخاری
            </h1>
          </Link>
          <Link
            to="/app"
            className=" m-2 shadow  bg-[url('https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg')] bg-cover text-[#897c7ddd] text-center rounded-2xl flex justify-start items-end h-36"
          >
            <h1 className=" wate bg-base-100 p-2 rounded-tl-2xl w-24 rounded-br-xl">
              فست فود
            </h1>
          </Link>
          <Link
            to="/app"
            className=" m-2 shadow  bg-[url('https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg')] bg-cover text-[#897c7ddd] text-center rounded-2xl flex justify-start items-end h-36"
          >
            <h1 className=" wate bg-base-100 p-2 rounded-tl-2xl w-24 rounded-br-xl">
              فست فود
            </h1>
          </Link>
          <Link
            to="/app"
            className=" m-2 shadow  bg-[url('https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg')] bg-cover text-[#897c7ddd] text-center rounded-2xl flex justify-start items-end h-36"
          >
            <h1 className=" wate bg-base-100 p-2 rounded-tl-2xl w-24 rounded-br-xl">
              فست فود
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
