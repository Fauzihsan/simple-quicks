import React from "react";
import MeatballsButton from "../../Button/MeatballsButton";

function Message3() {
  return (
    <div className="flex flex-col w-3/4 justify-end mr-auto">
      <p className="text-start text-third-message font-bold">Asep Ridwan</p>
      <div className="flex gap-x-3">
        <div className="bg-third-message p-2 rounded-md">
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt! Esse, asperiores! Officiis eaque laboriosam et fugiat! Sed, sunt soluta.</p>
          <p className="mt-3">19:32</p>
        </div>
        <MeatballsButton />
      </div>
    </div>
  );
}

export default Message3;
