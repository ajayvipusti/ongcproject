import React, { useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { BiCategoryAlt } from "react-icons/bi";
import Search from "./Search";
import { CSVLink } from "react-csv";
import { FaDownload, FaSearch, FaUpload } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BsPersonFillAdd } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi";
import AddForm from "./AddForm";
import AddPopup from "./AddPopup";

const Categorydata = ({
  customStyles,
  handelSubmit,
  handleReset,
  columns,
  value,
  handleValueChange,
  showDatePicker,
  tableHeader,
  ContentSolution,
  heading,
  showDownloadButton,
  fetchData,
}) => {
  const [filteredData, setFilteredData] = useState();
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  useEffect(() => {
    if (ContentSolution?.length > 0) {
      setFilteredData(ContentSolution.slice(0, 5)); // Show the first 5 rows by default
    }
  }, [ContentSolution]);

  // useEffect(() => {
  //   if (ContentSolution?.length > 0) {
  //     setFilteredData(ContentSolution);
  //   }
  // }, [ContentSolution]);

  const navigate = useNavigate();

  const openPopup = () => {
    setShowEditPopup(true);
  };

  const location = useLocation();

  const determineLogo = () => {
    if (location.pathname === "/admin/location") {
      return <BiCurrentLocation />;
    } else {
      return <BiCategoryAlt />;
    }
  };

  return (
    <div className="bg-white w-full overflow-x-scroll flex flex-col p-6 py-4 rounded-sm shadow-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl max-w-7xl">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          {determineLogo()}
          <span className="text-lg font-medium uppercase pl-2">{heading}</span>
        </div>
        <div>
          {showDownloadButton && (
            <div className="flex items-center ">
              <div>
                {/* <button
                className='py-0.5 px-2 border border-purple-500 shadow-md mr-4'
                onClick={openPopup}
              >
                 <span className='text-purple-500 flex items-center justify-center'>
                    <BsPersonFillAdd className='mr-2 ' />
                    Add
                  </span>
              </button> */}
                <AddPopup
                  setClose={setShowEditPopup}
                  close={showEditPopup}
                  showCancelButton={true}
                >
                  <AddForm fetchData={fetchData} />
                </AddPopup>
              </div>
              {/* Upload button */}
              <button
                className="py-0.5 px-2 border border-purple-500 shadow-md mr-4"
                onClick={() => navigate("/admin/uploadcategory")}
              >
                <span className="text-purple-500 flex items-center justify-center">
                  <FaUpload className="mr-2 " />
                  Upload
                </span>
              </button>

              {/* Download button */}
              <button className="py-0.5 px-2 border border-purple-500 shadow-md">
                <CSVLink
                  headers={tableHeader && tableHeader}
                  data={ContentSolution && ContentSolution}
                  filename={"ExcelSheet"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <span className="text-purple-500 flex items-center justify-center">
                    <FaDownload className="mr-2" />
                    CSV
                  </span>
                </CSVLink>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="py-2 border-t border-gray-200">
        <div
          className={`flex ${
            showDatePicker === true ? "justify-between" : "justify-end"
          } items-center`}
        >
          {showDatePicker === true && (
            <div className="flex justify-center items-center">
              <form
                onSubmit={handelSubmit}
                className="flex justify-center items-center"
              >
                <span className="pr-1 text-lg font-normal">From</span>
                {/* <input required type='date' value={value?.startDate} id='startDate' onChange={(e)=>handleValueChange(e)} className='rounded-lg border p-2' placeholder='Select start date'/> */}
                <span className="pl-4 text-lg font-normal">To</span>
                {/* <input required type='date'  value={value?.endDate} id='endDate' onChange={(e)=>handleValueChange(e)} className='rounded-lg ml-2 border p-2' placeholder='Select End date'/> */}
                <button
                  type="submit"
                  className=" mx-2 p-2 rounded-lg bg-blue-400"
                >
                  <FaSearch className=" text-white w-4 h-4" />
                </button>
              </form>
              <button
                className=" mx-2 ml-0 p-2 rounded-lg bg-red-400"
                onClick={() => handleReset()}
              >
                <BiReset className=" text-white w-4 h-4" />
              </button>
            </div>
          )}
          <Search data={ContentSolution} setFilteredData={setFilteredData} />
        </div>
      </div>
      <div className=" w-full">
        <MaterialReactTable
          muiTableProps={{
            sx: {
              tableLayout: "fixed",
              "& tbody tr": {
                borderBottom: "none",
                border: "none",
              },
              "& tbody td": {
                borderBottom: "none",
              },
            },
          }}
          columns={columns?.length > 0 ? columns : null}
          data={filteredData?.length > 0 ? filteredData : ContentSolution}
          enablePagination={true}
          onPaginationChange={setPagination}
          options={{
            pageSize: 5, // Set the default page size to 5 rows per page
            pageSizeOptions: [5, 10, 20, 30, 50, 75, 100],
            toolbar: true,
            paging: false,
            pagination: false,
            tabLayout: "fixed",
          }}
          state={{
            pagination,
          }}
        />
      </div>
    </div>
  );
};

export default Categorydata;
