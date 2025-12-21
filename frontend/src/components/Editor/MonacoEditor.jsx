import React from "react";

const CodeEditor = ({ code, onChange }) => {
  return (
    <div className="w-full h-full bg-gray-50 border rounded p-2">
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full font-mono text-sm bg-gray-50 outline-none resize-none"
      />
    </div>
  );
};

export default CodeEditor;
