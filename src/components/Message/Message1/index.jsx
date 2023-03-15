import React from "react";
import MeatballsButton from "../../Button/MeatballsButton";

function Message1() {
  return (
    <div className="flex flex-col w-3/4 justify-end ml-auto">
      <p className="text-end font-black text-[#4a4a4a]">You</p>
      <div className="flex gap-x-3">
        <MeatballsButton />
        <div className="bg-first-message p-2 rounded-md">
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt! Esse, asperiores! Officiis eaque laboriosam et fugiat! Sed, sunt soluta.</p>
          <p className="mt-3">19:32</p>
        </div>
      </div>
    </div>
  );
}

export default Message1;
