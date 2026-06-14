"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadPage() {
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFileName(acceptedFiles[0].name);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        Upload Contract
      </h1>

      <p className="text-gray-600 mb-8">
        Upload your contract and get an AI-powered analysis.
      </p>

      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-xl p-12 w-full max-w-xl text-center cursor-pointer"
      >
        <input {...getInputProps()} />

        {isDragActive ? (
          <p>Drop the PDF here...</p>
        ) : (
          <p>Drag & drop a PDF here, or click to select one</p>
        )}

        {fileName && (
          <p className="mt-4 font-semibold">
            Selected: {fileName}
          </p>
        )}
      </div>
    </main>
  );
}