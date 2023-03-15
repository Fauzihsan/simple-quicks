import React, { useState } from "react";
import InboxButton from "../../components/Button/InboxButton";
import MenuButton from "../../components/Button/MenuButton";
import TaskButton from "../../components/Button/TaskButton";
import SearcBarDashboard from "../../components/SearchBar/SearchDashboard";
import Inbox from "../Inbox";
import RoomChat from "../RoomChat";
import Task from "../Task";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showInbox, setShowInbox] = useState(false);
  const [showChat, setShowChat] = useState({
    status: false,
    id: null,
  });

  const handleShow = () => {
    setShowMenu(!showMenu);
    setShowTask(false);
    setShowInbox(false);
    setShowChat(false);
  };

  const handleShowTask = () => {
    setShowTask(!showTask);
    setShowInbox(false);
    setShowChat(false);
  };

  const handleShowInbox = () => {
    setShowInbox(!showInbox);
    setShowTask(false);
    setShowChat(false);
  };

  const openChat = (id) => {
    setShowChat({ ...showChat, status: !showChat.status, id });
    setShowInbox(false);
  };

  return (
    <div className={`bg-primary-darkgray h-screen flex`}>
      <div className="w-1/6 shadow-md shadow-white z-10"></div>
      <div className="w-full">
        <SearcBarDashboard />
        <Task showTask={showTask} />
        <Inbox showInbox={showInbox} openChat={openChat} />
        <RoomChat showChat={showChat.status} handleShowInbox={handleShowInbox} handleShowChat={openChat} />;
      </div>
      <div className="flex flex-row-reverse gap-5 absolute bottom-2 right-5">
        {showInbox | showTask ? (
          <>
            <InboxButton showMenu={showMenu} handleShowInbox={handleShowInbox} />
            <TaskButton showMenu={showMenu} handleShowTask={handleShowTask} />
          </>
        ) : (
          <>
            <MenuButton handleShow={handleShow} showMenu={showMenu} />
            <InboxButton showMenu={showMenu} handleShowInbox={handleShowInbox} />
            <TaskButton showMenu={showMenu} handleShowTask={handleShowTask} />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
