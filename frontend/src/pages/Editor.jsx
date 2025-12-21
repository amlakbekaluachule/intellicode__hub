import React, { useState } from "react";
import { useParams } from "react-router-dom";

const mockFiles = [
  { name: "index.js", content: "// Your code here" },
  { name: "App.jsx", content: "// React component" },
  { name: "utils.js", content: "// Helper functions" },
];

const EditorPage = () => {
  const { projectId } = useParams();
  const [files, setFiles] = useState(mockFiles);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [code, setCode] = useState(files[0].content);

  const handleFileClick = (index) => {
    setCurrentFileIndex(index);
    setCode(files[index].content);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    const updatedFiles = [...files];
    updatedFiles[currentFileIndex].content = e.target.value;
    setFiles(updatedFiles);
  };

  const handleAICompletion = () => {
    alert(`AI completion for ${files[currentFileIndex].name} (mock)`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* File tree */}
      <div className="w-1/4 bg-white p-4 border-r overflow-y-auto">
        <h2 className="font-bold text-lg mb-4">Files</h2>
        <ul>
          {files.map((file, index) => (
            <li
              key={file.name}
              onClick={() => handleFileClick(index)}
              className={`p-2 rounded cursor-pointer hover:bg-gray-200 ${
                index === currentFileIndex ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {file.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Code editor */}
      <div className="flex-1 flex flex-col p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">{files[currentFileIndex].name}</h2>
          <button
            onClick={handleAICompletion}
            className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            AI Complete
          </button>
        </div>
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="flex-1 w-full p-4 bg-gray-50 border rounded font-mono text-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

export default EditorPage;
