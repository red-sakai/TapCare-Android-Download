"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black-700 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-sm sm:max-w-md w-full text-center text-white">
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
            <Image
              src="/tapcare-logo.png"
              alt="TapCare Logo"
              width={80}
              height={80}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">TapCare</h1>
          <p className="text-base sm:text-lg opacity-90">Emergency Response App</p>
          <p className="text-xs sm:text-sm opacity-75 mt-1">For Rizal High School Students</p>
        </div>

        {/* Description */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/20">
          <p className="text-xs sm:text-sm leading-relaxed opacity-90">
            Quick access to emergency services, school safety resources,
            and immediate help when you need it most.
          </p>
        </div>

        {/* Download Button */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <a
            href="/TapCare.apk"
            download="TapCare.apk"
            className="block w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-colors duration-200 shadow-lg text-sm sm:text-base"
            onClick={() => {
              // Redirect to instructions after a short delay to allow download
              setTimeout(() => {
                window.location.href = '/instructions';
              }, 1000);
            }}
          >
            Download APK
          </a>
        </div>

        {/* Footer */}
        <div className="text-xs opacity-60">
          <p>Rizal High School • Student Safety Initiative</p>
        </div>
      </div>
    </div>
  );
}
