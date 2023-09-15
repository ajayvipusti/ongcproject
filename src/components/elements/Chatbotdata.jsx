import React, { useEffect, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import Search from "./Search";
import { CSVLink } from "react-csv";
import { FaDownload, FaSearch, FaUpload } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BsPersonFillAdd } from "react-icons/bs";
import { useLocation } from "react-router-dom";

import { SiChatbot } from "react-icons/si";

const Chatbotdata = ({
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
}) => {
  const [filteredData, setFilteredData] = useState();
  const [showEditPopup, setShowEditPopup] = useState(false);
  // const [inputValue, setInputValue] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  // console.log('content',ContentSolution)
  useEffect(() => {
    if (ContentSolution?.length > 0) {
      setFilteredData(ContentSolution);
    }
  }, [ContentSolution]);

  const navigate = useNavigate();

  const openPopup = () => {
    setShowEditPopup(true);
  };

  const location = useLocation();

  return (
    <div className="bg-white w-full overflow-x-scroll flex flex-col p-6 py-4 rounded-sm shadow-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl max-w-7xl">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <SiChatbot />
          <span className="text-lg font-medium uppercase pl-2">{heading}</span>
        </div>
        <div>
          {showDownloadButton && (
            <div className="flex items-center ">
              <div>
                <button
                  className="py-0.5 px-2 border border-purple-500 shadow-md mr-4"
                  onClick={() => navigate("/admin/addchatbox")}
                >
                  <span className="text-purple-500 flex items-center justify-center">
                    <BsPersonFillAdd className="mr-2 " />
                    Add
                  </span>
                </button>
              </div>

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
                <input
                  required
                  type="date"
                  value={value?.startDate}
                  id="startDate"
                  onChange={(e) => handleValueChange(e)}
                  className="rounded-lg border p-2"
                  placeholder="Select start date"
                />
                <span className="pl-4 text-lg font-normal">To</span>
                <input
                  required
                  type="date"
                  value={value?.endDate}
                  id="endDate"
                  onChange={(e) => handleValueChange(e)}
                  className="rounded-lg ml-2 border p-2"
                  placeholder="Select End date"
                />
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
          options={{
            pageSize: 0,
            // pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100],
            toolbar: true,
            paging: false,
            pagination: false,

            tabLayout: "fixed",
          }}
          state={{
            pagination,
          }}
          onPaginationChange={setPagination}
        />
      </div>
    </div>
  );
};

export default Chatbotdata;
