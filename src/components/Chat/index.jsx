import React from "react";

function Chat(props) {
  return (
    <div onClick={() => props.openChat("id")} className="cursor-pointer">
      <div className="p-5">
        <div className="flex gap-x-10 border-b-4 pb-5">
          <div className="">
            <button className="bg-primary-white rounded-full w-10 h-10">
              <svg width="15" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6666 0.745087C10.6366 0.745087 7.37249 4.0092 7.37249 8.0392C7.37249 12.0692 10.6366 15.3333 14.6666 15.3333C18.6966 15.3333 21.9607 12.0692 21.9607 8.0392C21.9607 4.0092 18.6966 0.745087 14.6666 0.745087ZM18.3137 8.0392C18.3137 6.03332 16.6725 4.39215 14.6666 4.39215C12.6607 4.39215 11.0195 6.03332 11.0195 8.0392C11.0195 10.0451 12.6607 11.6863 14.6666 11.6863C16.6725 11.6863 18.3137 10.0451 18.3137 8.0392ZM25.6078 26.2745C25.2431 24.9798 19.5901 22.6274 14.6666 22.6274C9.76131 22.6274 4.14484 24.9616 3.72543 26.2745H25.6078ZM0.0783691 26.2745C0.0783691 21.4239 9.79778 18.9804 14.6666 18.9804C19.5354 18.9804 29.2548 21.4239 29.2548 26.2745V29.9216H0.0783691V26.2745Z"
                  fill="#4a4a4a"
                />
              </svg>
            </button>
            <button className="bg-primary-blue rounded-full w-10 h-10 absolute -ml-5">
              <svg width="15" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6666 0.745087C10.6366 0.745087 7.37249 4.0092 7.37249 8.0392C7.37249 12.0692 10.6366 15.3333 14.6666 15.3333C18.6966 15.3333 21.9607 12.0692 21.9607 8.0392C21.9607 4.0092 18.6966 0.745087 14.6666 0.745087ZM18.3137 8.0392C18.3137 6.03332 16.6725 4.39215 14.6666 4.39215C12.6607 4.39215 11.0195 6.03332 11.0195 8.0392C11.0195 10.0451 12.6607 11.6863 14.6666 11.6863C16.6725 11.6863 18.3137 10.0451 18.3137 8.0392ZM25.6078 26.2745C25.2431 24.9798 19.5901 22.6274 14.6666 22.6274C9.76131 22.6274 4.14484 24.9616 3.72543 26.2745H25.6078ZM0.0783691 26.2745C0.0783691 21.4239 9.79778 18.9804 14.6666 18.9804C19.5354 18.9804 29.2548 21.4239 29.2548 26.2745V29.9216H0.0783691V26.2745Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <h1 className="text-primary-blue font-bold text-2xl">109220 - Naturalization</h1>
              <span>02/06/2023 10:45</span>
            </div>
            <p>
              <b>Ellen : </b>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, mollitia?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
