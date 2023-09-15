import React, { useRef, useState } from "react";
import axios from "axios";
import { getToken } from "../../hooks/useLocalStorage";
import { ToastContainer, toast } from "react-toastify";

import QueryUploadExcel from "../../components/elements/QueryUploadExcel";

const UploadSubCategory = () => {
  const [file, setFile] = useState(null);
  const formRef = useRef();
  const token = getToken();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  console.log("images", file);
  const handleUpload = async () => {
    console.log("images", file);
    if (file) {
      try {
        const formData = new FormData();
        formData.append("import_file", file);

        const request = await axios.post(
          `${import.meta.env.VITE_APP_API_URL}question/import`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
            },
          }
        );
        const response = await request?.data;
        if (response?.data?.message === "The import file field is required.") {
          toast.error("Please select a file to upload.");
        } else if (response?.data?.message === "File Import successful.") {
          toast.success("Upload Successful!");
          setFile(null);
          formRef.current.reset();
        } else {
          const errors = response?.data?.errors?.import_file;
          if (errors && Array.isArray(errors)) {
            errors.forEach((errorMessage) => {
              toast.error(errorMessage);
            });
          }
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error(error?.response?.data?.message);
      }
    } else {
      toast.error("Please select a file to upload.");
    }
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <ToastContainer position="top-center" />
      <QueryUploadExcel
        formRef={formRef}
        handleFileChange={handleFileChange}
        handleUpload={handleUpload}
        file={file}
      />
    </div>
  );
};

export default UploadSubCategory;
