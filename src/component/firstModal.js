import React, { useState } from "react";

function FirstModal() {
  const [Modal, setModal] = useState(true);

  return (
    <>
      {Modal ? (
        <React.Fragment>
          <div className=" flex justify-center sticky top-3 z-40 mx-3 mt-10 md:mx-[12rem]">
            <div role="alert" className="alert alert-warning z-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span> این سایت در حال توسعه است و امکان سفارش وجود ندارد.</span>
              <div>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setModal(false)}
                >
                  فهمیدم
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </>
  );
}

export default FirstModal;
