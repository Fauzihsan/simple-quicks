import React from "react";
import ChatTime from "../../components/DateTime/ChatTime";
import Message1 from "../../components/Message/Message1";
import Message2 from "../../components/Message/Message2";
import Message3 from "../../components/Message/Message3";

function RoomChat(props) {
  const close = () => {
    props.handleShowInbox();
    props.handleShowChat();
  };
  return (
    <div className={`${props.showChat !== true ? "hidden" : "bg-white"} absolute right-10 w-3/4 h-3/4 mt-5 rounded-md overflow-y-auto no-scrollbar`}>
      {/* header */}
      <div className="flex justify-between py-3 px-7 bg-white fixed rounded-md w-3/4 z-50 border-b-4">
        <div className="left-area flex gap-10">
          <button>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9883 8.83041H5.68683L12.7152 1.80204L10.9298 0.0292358L0.871338 10.0877L10.9298 20.1462L12.7026 18.3734L5.68683 11.345H20.9883V8.83041Z" fill="#4a4a4a" />
            </svg>
          </button>
          <div className="info-group">
            <div className="flex flex-col justify-between">
              <h1 className="text-primary-blue font-bold text-2xl">109220 - Naturalization</h1>
              <span>3 Participant</span>
            </div>
          </div>
        </div>
        <button onClick={close}>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z" fill="#4a4a4a" />
          </svg>
        </button>
      </div>

      <div className="my-24 px-5 flex flex-col gap-y-3">
        <ChatTime />
        <Message1 />
        <Message2 />
        <Message3 />
      </div>

      {/* bottom area */}
      <div className="rounded-md fixed w-3/4 bottom-24 z-50 bg-white">
        <form className="w-full flex gap-2 p-3">
          <input type="text" placeholder="Type a new message" className="w-full bg-transparent outline-none text-[#4a4a4a] border-solid border-2 border-primary-blue p-2" />
          <button type="submit" className="bg-primary-blue text-white rounded-md px-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default RoomChat;
