import React, { useState } from "react";
import InboxButton from "../../components/Button/InboxButton";
import MenuButton from "../../components/Button/MenuButton";
import TaskButton from "../../components/Button/TaskButton";
import SearcBar from "../../components/SearchBar";
import Inbox from "../Inbox";
import Task from "../Task";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showInbox, setShowInbox] = useState(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
    setShowTask(false);
    setShowInbox(false);
  };

  const handleShowTask = () => {
    setShowTask(!showTask);
    setShowInbox(false);
  };

  const handleShowInbox = () => {
    setShowInbox(!showInbox);
    setShowTask(false);
  };

  return (
    <div className={`bg-primary-darkgray h-screen flex`}>
      <div className="w-1/6 shadow-md shadow-white z-10"></div>
      <div className="w-full">
        <SearcBar />
        <Task showTask={showTask} />
        <Inbox showInbox={showInbox} />
      </div>
      <div className="flex flex-row-reverse gap-5 absolute bottom-5 right-5">
        <MenuButton handleShow={handleShow} showMenu={showMenu} />
        <InboxButton showMenu={showMenu} handleShowInbox={handleShowInbox} />
        <TaskButton showMenu={showMenu} handleShowTask={handleShowTask} />
      </div>
    </div>
  );
}

export default Dashboard;
