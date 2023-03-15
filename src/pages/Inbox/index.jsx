import React from "react";
import Chat from "../../components/Chat";
import SearchChat from "../../components/SearchBar/SearchChat";

function Inbox(props) {
  return (
    <div className={`${props.showInbox !== true ? "hidden" : "bg-white"} absolute right-10 w-3/4 h-3/4 mt-5 rounded-md overflow-y-auto no-scrollbar`}>
      <SearchChat />
      <div className="mt-20">
        <Chat openChat={() => props.openChat("15")} />
        <Chat openChat={() => props.openChat("15")} />
        <Chat openChat={() => props.openChat("15")} />
        <Chat openChat={() => props.openChat("15")} />
      </div>
    </div>
  );
}

export default Inbox;
