"use client";

import { useState } from "react";
import { Upload, Check } from "lucide-react";

export default function SingleUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
      setCurrentStep(2);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      setCurrentStep(2);
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-center space-x-6">
        <div className="flex flex-col items-center">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-semibold text-xs ${
            currentStep > 1 ? "bg-green-600" : currentStep === 1 ? "bg-gradient-to-r from-blue-600 to-violet-600" : "bg-gray-600"
          }`}>
            {currentStep > 1 ? <Check size={12} /> : 1}
          </div>
          <span className={`mt-1 text-xs font-medium ${currentStep >= 1 ? "text-white" : "text-gray-400"}`}>Upload</span>
        </div>
        <div className={`w-6 h-0.5 ${currentStep > 1 ? "bg-green-600" : "bg-gray-600"}`}></div>
        <div className="flex flex-col items-center">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-semibold text-xs ${
            currentStep > 2 ? "bg-green-600" : currentStep === 2 ? "bg-gradient-to-r from-blue-600 to-violet-600" : "bg-gray-600"
          }`}>
            {currentStep > 2 ? <Check size={12} /> : 2}
          </div>
          <span className={`mt-1 text-xs font-medium ${currentStep >= 2 ? "text-white" : "text-gray-400"}`}>Enhance</span>
        </div>
        <div className={`w-6 h-0.5 ${currentStep > 2 ? "bg-green-600" : "bg-gray-600"}`}></div>
        <div className="flex flex-col items-center">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-semibold text-xs ${
            currentStep > 3 ? "bg-green-600" : currentStep === 3 ? "bg-gradient-to-r from-blue-600 to-violet-600" : "bg-gray-600"
          }`}>
            {currentStep > 3 ? <Check size={12} /> : 3}
          </div>
          <span className={`mt-1 text-xs font-medium ${currentStep >= 3 ? "text-white" : "text-gray-400"}`}>Review</span>
        </div>
      </div>

      {/* Upload Area */}
      <div className="max-w-3xl mx-auto">
        <div
          className={`relative border-2 border-dashed rounded-2xl p-16 text-center transition-colors ${
            dragActive
              ? "border-primary-500 bg-primary-500/10"
              : "border-gray-600 hover:border-gray-500"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-gray-700 rounded-full flex items-center justify-center">
              <Upload size={32} className="text-gray-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {uploadedFile ? "File Selected" : "Drop your image here"}
              </h3>
              <p className="text-gray-400">
                {uploadedFile
                  ? `${uploadedFile.name} (${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)`
                  : "or click to browse files"
                }
              </p>
            </div>
            {uploadedFile && (
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <Check size={20} />
                <span>Ready to enhance</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}