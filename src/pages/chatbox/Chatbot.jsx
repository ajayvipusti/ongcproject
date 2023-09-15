import React, { useEffect, useState } from "react";
import Chatbotdata from "../../components/elements/Chatbotdata";
import { useDispatch, useSelector } from "react-redux";
import { getCsatData } from "../../features/actions/csat/csat";
import { DataChatbot } from "../../components/lib/const/DataChatbot";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Tooltipcopy from "../../components/elements/Tooltipcopy";

const Chatbot = () => {
  const dispatch = useDispatch();
  const { csat } = useSelector((state) => state.csat);
  //   const data = csat?.length>0 && csat.map((x)=>({system_id:x?.system_id, user_id:x?.user_id, feedback_rating:x?.feedback_rating, feedback_comment:x?.feedback_comment}))

  const [data, setData] = useState([]);

  //   useEffect(()=>{
  //     //   dispatch(getCsatData())
  //   },[])

  const handleDeleteRow = (index) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this row?"
    );
    if (shouldDelete) {
      const updatedRows = [...data];
      updatedRows.splice(index, 1);
      setData(updatedRows);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/chatbot")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const customStyles = {
    row: {
      style: {
        minWidth: "max-content",
        border: "0.5px solid gray",
      },
    },
    headCells: {
      style: {
        border: "0.5px solid gray",
      },
    },
    cells: {
      style: {
        minWidth: "fit",
        border: "0.5px solid gray",
      },
    },
    expanderRow: {
      style: {
        color: "gray",
        backgroundColor: "red",
      },
    },
  };

  const columns = [
    {
      header: "S.No",
      sortable: true,
      accessorKey: "s_no",
      size: 100,
      Cell: ({ cell, row }) => <div>{parseInt(row?.id) + 1}</div>,
    },
    {
      header: "Category",
      sortable: true,
      accessorKey: "category",
    },
    {
      header: "Subcategory",
      sortable: true,
      accessorKey: "subcategory",
    },
    {
      header: "Question",
      sortable: true,
      accessorKey: "question",
    },
    {
      header: "Answer",
      sortable: true,
      accessorKey: "answer",
      //   size:150,
    },
    {
      header: "Action",
      accessorKey: "action",
      size: 150,
      Cell: ({ row }) => (
        <>
          <Tooltipcopy title={"Delete"}>
            <button
              className="tableButton mx-1 p-1 bg-gray-400 border  text-white hover:bg-white hover:text-indigo-500"
              onClick={() => handleDeleteRow(row.id)}
            >
              <AiFillDelete size={18} />
            </button>
          </Tooltipcopy>
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-4 px-4">
      <Chatbotdata
        heading={"Chatbot"}
        showDownloadButton={true}
        customStyles={customStyles}
        columns={columns}
        ContentSolution={data?.length > 0 ? data : ""}
      />
      {/* <Chatbotdata heading={'Chatbot'} showDownloadButton={true} customStyles={customStyles} columns={columns} ContentSolution={DataChatbot}/> */}
    </div>
  );
};

export default Chatbot;
