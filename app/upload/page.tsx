export default function UploadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        Upload Contract
      </h1>

      <p className="text-gray-600 mb-8">
        Upload your contract and get an AI-powered analysis.
      </p>

      <div className="border-2 border-dashed rounded-xl p-12 w-full max-w-xl text-center">
        <p>Drag and drop a PDF here</p>

        <button className="mt-4 bg-black text-white px-4 py-2 rounded">
          Choose File
        </button>
      </div>
    </main>
  );
}