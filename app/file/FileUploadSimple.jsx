"use client";
import { useState, useRef } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

function FileUploadSimple() {
  const [fileList, setFileList] = useState();
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  const files = fileList ? [...fileList] : [];

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }
    const data = new FormData();

    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const sizeInFormat = (bytes) => {
    let totalSize = 0;
    if (bytes > 999990000) {
      totalSize = bytes / Math.pow(1024, 3);
      return `${totalSize.toFixed(2)} GB`;
    }
    if (bytes > 999000) {
      totalSize = bytes / Math.pow(1024, 2);
      return `${totalSize.toFixed(2)} MB`;
    } else {
      totalSize = bytes / Math.pow(1024, 1);
      return `${totalSize.toFixed(2)} KB`;
    }
  };

  const handleBrowseClick = () => {
    inputRef.current.click();
  };

  const handleFileClear = () => {
    setFileList((inputRef.current.files = null));
  };

  // the drag and drop feature was made by making the main div relative and making the input absolute and covering the main div with it

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex items-center justify-center w-full relative">
        <label
          htmlFor="dropzone"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg  bg-gray-100 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-1">
            <AiOutlineFileAdd className="dark:fill-gray-300" size={40} />
            <p className="dark:text-gray-200">Drag and Drop files here</p>
            <input
              id="dropzone"
              ref={inputRef}
              className="opacity-0 absolute w-full h-full cursor-pointer "
              type="file"
              onChange={handleFileChange}
              multiple
            />
          </div>
        </label>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-gray-300 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleBrowseClick}
        >
          Browse Files
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleUploadClick}
        >
          Upload
        </button>
        <button
          className="bg-gray-300 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleFileClear}
        >
          Clear
        </button>
      </div>
      <div>
        <ul>
          {files.map((file, i) => (
            <li
              key={i}
              className=" flex justify-between items-center gap-10 my-3 p-2 px-4 bg-gray-300 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 text-gray-800  rounded-r"
            >
              <div className="">{file.name}</div>
              <div className="px-1.5 py-0.5 rounded dark:bg-gray-600 bg-gray-200">
                {sizeInFormat(file.size)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FileUploadSimple;
