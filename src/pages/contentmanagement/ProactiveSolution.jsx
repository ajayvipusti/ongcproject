import React, { useEffect, useState } from "react";
import DataTables from "../../components/elements/DataTables";
import axios from "axios";
import { getToken } from "../../hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../api/https";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import Tooltip from "../../components/elements/Tooltip";

const ProactiveSolution = () => {
  const [showHover, setShowHover] = useState(false);
  const [showHoverText, setShowHoverText] = useState("");
  const [showHoverHeading, setShowHoverHeading] = useState("");
  const [data, setData] = useState();
  const token = getToken();
  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });

  const handleReset = () => {
    setValue({
      startDate: "",
      endDate: "",
    });
    api();
  };

  const handleValueChange = (e) => {
    if (e.target.id === "startDate") {
      setValue((value) => ({ ...value, startDate: e.target.value }));
    }
    if (e.target.id == "endDate") {
      setValue((value) => ({ ...value, endDate: e.target.value }));
    }
  };

  const api = async () => {
    const request = await axios.get(`${import.meta.env.VITE_APP_API_URL}csat`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
        Accept: "js",
      },
    });
    const response = await request?.data;
    console.log("reponse", response);
    if (response?.code === 200) {
      setData(
        response?.data?.map((x) => ({
          id: x?._id,
          engineer_name: x?.engineer_name,
          system_id: x?.system_id,
          subject: x?.subject,
          user_name: x?.user_name,
          status: x?.status,
          resolution_date: x?.resolution_date,
          region: x?.region,
          location: x?.location,
          incident_id: x?.incident_id,
          feedback_comment: x?.feedback_comment,
          feedback_rating: x?.feedback_rating,
          close_count:
            x?.close_count !== null || undefined || "" ? x?.close_count : 0,
          feedback_status: x?.feedback_status,
          created_at: moment(x?.created_at).format("DD/MM/YYYY"),
        }))
      );
    }
  };

  const pushNotificationApi = async (cell) => {
    const headers = {
      Authorization: "Bearer " + token,
      Accept: "js",
    };
    const id = cell?.row?.original?.id;
    const req = await makeRequest(
      "get",
      `${import.meta.env.VITE_APP_API_URL}csat/reinitiate/${id}`,
      null,
      headers
    );
    const res = await req;
    if (res?.code === 200) {
      toast.success(`${res?.message}`);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      Authorization: "Bearer " + token,
      Accept: "js",
      "Content-Type": "multipart/form-data",
    };
    const newData = {
      from: value?.startDate,
      to: value?.endDate,
    };
    if (newData) {
      const req = await makeRequest(
        "post",
        `${import.meta.env.VITE_APP_API_URL}csat/filters`,
        newData,
        headers
      );
      const res = await req;
      if (res?.code === 200) {
        setData(
          res?.data?.map((x) => ({
            id: x?._id,
            engineer_name: x?.engineer_name,
            system_id: x?.system_id,
            subject: x?.subject,
            user_name: x?.user_name,
            status: x?.status,
            resolution_date: x?.resolution_date,
            region: x?.region,
            location: x?.location,
            incident_id: x?.incident_id,
            feedback_comment: x?.feedback_comment,
            feedback_rating: x?.feedback_rating,
            close_count:
              x?.close_count !== null || undefined || "" ? x?.close_count : 0,
            feedback_status: x?.feedback_status,
            created_at: moment(x?.created_at).format("DD/MM/YYYY"),
          }))
        );
      }
    }
  };

  const fetchData = async () => {
    await api();
    //   setInterval(api, 20000);
  };

  useEffect(() => {
    fetchData();

    if (value.startDate === "" && value.endDate === "") {
      api();
    }
  }, [value]);

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

  const handleMoreText = ({ text, heading }) => {
    setShowHover(true);
    setShowHoverText(text);
    setShowHoverHeading(heading);
  };

  const columns = [
    {
      header: "Sr. No",
      Cell: ({ cell, row }) => <div>{parseInt(row?.id) + 1}</div>,
    },
    {
      header: "Engineer Name",
      sortable: true,
      accessorKey: "engineer_name",
    },
    {
      header: "Host Name",
      sortable: true,
      accessorKey: "system_id",
    },

    {
      header: "Subject",
      sortable: true,
      Cell: ({ cell, row }) => (
        <div className="h-6 overflow-hidden">
          {row?.original?.subject.substring(0, 9)}
          {row?.original?.subject.length > 14 ? (
            <>
              <span>...</span>
              <button
                className="text-blue-500 hover:text-blue-600 hover:cursor-pointer"
                onClick={() =>
                  handleMoreText({
                    text: row?.original?.subject,
                    heading: "Subject",
                  })
                }
              >
                Read More
              </button>
            </>
          ) : null}
        </div>
      ),
    },
    {
      header: "User Name",
      sortable: true,
      accessorKey: "user_name",
    },
    {
      header: "Status",
      sortable: true,
      accessorKey: "status",
    },
    {
      header: "Resolution Date",
      sortable: true,
      accessorKey: "resolution_date",
    },
    {
      header: "Region",
      sortable: true,
      accessorKey: "region",
    },
    {
      header: "Location",
      sortable: true,
      accessorKey: "location",
    },
    {
      header: "Incident",
      sortable: true,
      accessorKey: "incident_id",
    },
    {
      header: "Feedback Comment",
      sortable: true,
      Cell: ({ cell, row }) => (
        <div className="h-6 overflow-hidden">
          {row?.original?.feedback_comment?.substring(0, 9)}
          {row?.original?.feedback_comment?.length > 14 ? (
            <>
              <span>...</span>
              <button
                className="text-blue-500 hover:text-blue-600 hover:cursor-pointer"
                onClick={() =>
                  handleMoreText({
                    text: row?.original?.feedback_comment,
                    heading: "Feedback Comment",
                  })
                }
              >
                Read More
              </button>
            </>
          ) : null}
        </div>
      ),
    },
    {
      header: "Ratings",
      sortable: true,
      accessorKey: "feedback_rating",
    },
    {
      header: "Feedback Popup Count",
      sortable: true,
      accessorKey: "close_count",
    },
    {
      header: "Upload At",
      sortable: true,
      accessorKey: "created_at",
    },
    {
      header: "Action",
      Cell: ({ cell, row }) => (
        <>
          {JSON.parse(row?.original?.feedback_status) === 1 ? (
            <button
              onClick={() => pushNotificationApi(cell)}
              className="px-1 ml-1 delay-75 duration-75 bg-green-700 text-white hover:bg-green-600 py-1"
            >
              Re-initiate
            </button>
          ) : (
            <span>Not Required</span>
          )}
        </>
      ),
    },
  ];

  return (
    <div className="">
      <Tooltip
        showHover={showHover}
        showHoverHeading={showHoverHeading}
        setShowHoverText={setShowHoverText}
        setShowHover={setShowHover}
        showHoverText={showHoverText}
      />
      <ToastContainer position="top-center" />
      <div className="p-2 py-0">
        <DataTables
          customStyles={customStyles}
          handleReset={handleReset}
          handelSubmit={handelSubmit}
          showDatePicker={true}
          value={value}
          handleValueChange={handleValueChange}
          showDownloadButton={true}
          heading={"CSAT Report"}
          columns={columns}
          ContentSolution={data?.length > 0 ? data : ""}
        />
      </div>
    </div>
  );
};

export default ProactiveSolution;
