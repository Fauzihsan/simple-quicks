import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { UPDATE_TODO } from "../../api/models/Mutation/UpdateStatusTodo";
import { GET_TODO } from "../../api/models/Query/GetTodo";
import DeleteButton from "../Button/DeleteButton";
import ToggleAccordion from "../Button/ToggleAccordion";
import ToggleDelete from "../Button/ToggleDelete";
import DateIcon from "../Icon/DateIcon";
import PencilIcon from "../Icon/PencilIcon";
import Loading from "../Loading";

function Todo(props) {
  const { d } = props;

  //for handle id selected
  const [temporaryId, setTemporaryId] = useState(null);

  // start how to update status of a task (completed or not)
  const [updateStatusTodo, { loading: loadingUpdate }] = useMutation(UPDATE_TODO, {
    refetchQueries: [{ query: GET_TODO }],
  });
  const handleUpdate = (id, e) => {
    setTemporaryId(id);
    updateStatusTodo({
      variables: {
        id,
        status: e.status,
        title: e.title,
        desc: e.desc,
        date: e.date,
      },
    });
  };

  // remaining date of a task
  const daysLeft = (data) => {
    const now = new Date();
    const target = new Date(data);
    const diff = target.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days < 0) {
      return 0;
    } else {
      return days;
    }
  };

  // state for handle show accordion & popup delete
  const [accordion, setAccordion] = useState({});
  const [showDelete, setShowDelete] = useState({});

  //data update
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [isDescEditing, setIsDescEditing] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({ title: d.title, desc: d.desc, date: d.date, status: d.status });

  const handleTitleEdit = () => {
    setIsTitleEditing(true);
  };

  const handleDescEdit = () => {
    setIsDescEditing(true);
  };

  const handleTitleSave = () => {
    setIsTitleEditing(false);
    handleUpdate(d.id, { ...d, title: dataUpdate.title });
  };

  const handleDescSave = () => {
    setIsDescEditing(false);
    handleUpdate(d.id, { ...d, desc: dataUpdate.desc });
  };
  const handleDateSave = () => {
    handleUpdate(d.id, { ...d, date: dataUpdate.date });
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="left flex gap-x-5 w-1/2 my-auto">
          {loadingUpdate && temporaryId === d.id ? <Loading class="my-auto" width="15" height="15" /> : <input type="checkbox" checked={d.status} onChange={(e) => handleUpdate(d.id, { ...d, status: e.target.checked })} name="" id="" />}
          {/* <p className={`${d.status && "line-through"}`}>{d.title}</p> */}
          <>
            {isTitleEditing ? (
              <input type="text" value={dataUpdate.title} onChange={(e) => setDataUpdate({ ...dataUpdate, title: e.target.value })} onBlur={handleTitleSave} onKeyDown={(e) => e.key === "Enter" && handleTitleSave()} className="border-2 px-5 py-2 rounded-md" />
            ) : (
              <div onClick={handleTitleEdit}>
                <p className={`${d.status && "line-through"}`}>{d.title}</p>
              </div>
            )}
          </>
        </div>
        <div className="right flex gap-x-5 justify-end mb-auto w-1/2 ">
          {!d.status && <span className="text-red-600">{daysLeft(d.date)} Days Left</span>}
          <span>{d.date}</span>
          <ToggleAccordion id={d.id} setAccordion={setAccordion} accordion={accordion} />
          <ToggleDelete id={d.id} setShowDelete={setShowDelete} showDelete={showDelete} />
          {showDelete[d.id] && <DeleteButton id={d.id} />}
        </div>
      </div>
      {accordion[d.id] && (
        <>
          <div className="datetime flex gap-5 px-5 mt-5">
            <span className="my-auto">
              <DateIcon color="#2F80ED" />
            </span>
            <input type="date" name="" id="" className="border-2 px-5 py-2 rounded-md" value={dataUpdate.date} onChange={(e) => setDataUpdate({ ...dataUpdate, date: e.target.value })} onBlur={handleDateSave} />
          </div>
          <div className="desc flex gap-5 px-5 mt-5">
            <span>
              <PencilIcon color="#2F80ED" />
            </span>
            {isDescEditing ? (
              <textarea value={dataUpdate.desc} onChange={(e) => setDataUpdate({ ...dataUpdate, desc: e.target.value })} onBlur={handleDescSave} onKeyDown={(e) => e.key === "Enter" && handleDescSave()} className="border-2 px-5 py-2 rounded-md" />
            ) : (
              <div onClick={handleDescEdit}>
                <p>{d.desc}</p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Todo;
