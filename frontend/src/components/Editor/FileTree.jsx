import React from "react";

const FileTree = ({ files, onFileSelect, activeFileIndex }) => {
  return (
    <div className="bg-white p-4 border-r h-full overflow-y-auto">
      <h2 className="font-bold text-lg mb-4">Files</h2>
      <ul>
        {files.map((file, index) => (
          <li
            key={file.name}
            onClick={() => onFileSelect(index)}
            className={`p-2 rounded cursor-pointer hover:bg-gray-200 transition ${
              index === activeFileIndex ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileTree;
