import React, { useEffect, useState } from "react";
import Categorydata from "../../components/elements/Categorydata";
import SubCategorydata from "../../components/elements/SubCategorydata";

import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../hooks/useLocalStorage";
import axios from "axios";

const Subcategory = () => {
  const token = getToken();

  const dispatch = useDispatch();
  const { csat } = useSelector((state) => state.csat);
  //   const data = csat?.length>0 && csat.map((x)=>({system_id:x?.system_id, user_id:x?.user_id, feedback_rating:x?.feedback_rating, feedback_comment:x?.feedback_comment}))

  //   useEffect(()=>{
  //     //   dispatch(getCsatData())
  //   },[])

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}subcategory`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    const response = request;
    console.log("reponse", response.data.data);
    setData(response?.data?.data);
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
      size: 120,
      Cell: ({ cell, row }) => <div>{parseInt(row?.id) + 1}</div>,
    },
    {
      header: "ID",
      sortable: true,
      accessorKey: "id",
      size: 100,
    },
    {
      header: "Entity Type",
      sortable: true,
      accessorKey: "entitytype",
    },
    {
      header: "Display Label",
      sortable: true,
      accessorKey: "displaylabel",
    },
    {
      header: "Phase_ID",
      sortable: true,
      accessorKey: "phaseid",
    },
    {
      header: "Category",
      sortable: true,
      accessorKey: "category.displaylabel",
    },
  ];
  return (
    <div className="flex flex-col gap-4 px-4">
      <SubCategorydata
        heading={"Sub Category"}
        fetchData={fetchData}
        showDownloadButton={true}
        customStyles={customStyles}
        columns={columns}
        ContentSolution={data?.length > 0 ? data : ""}
      />
      {/* <Categorydata heading={'Sub Category'} showDownloadButton={true} customStyles={customStyles} columns={columns} ContentSolution={DataCategory}/> */}
    </div>
  );
};

export default Subcategory;
