import Image from "next/image";
import Link from "next/link";

export default function Instructions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black-700 p-4 sm:p-8">
      <div className="max-w-sm sm:max-w-2xl mx-auto text-white">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
            <Image
              src="/tapcare-logo.png"
              alt="TapCare Logo"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Installation Instructions</h1>
          <p className="text-xs sm:text-sm opacity-75">Follow these steps to install TapCare on your Android device</p>
        </div>

        {/* Instructions */}
        <div className="space-y-4 sm:space-y-6">
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/20">
            <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-red-300">Step 1: Locate the Downloaded File</h2>
            <p className="text-xs sm:text-sm opacity-90 mb-2">After downloading, find the APK file:</p>
            <ol className="text-xs sm:text-sm opacity-90 list-decimal list-inside space-y-1 ml-2 sm:ml-4">
              <li>Open your <strong>Files</strong> app</li>
              <li>Navigate to <strong>Downloads</strong> folder</li>
              <li>Look for <strong>TapCare.apk</strong> or <strong>app-release.apk</strong></li>
              <li>Tap on the file to begin installation</li>
            </ol>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/20">
            <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-red-300">Step 2: Install Using Package Manager</h2>
            <p className="text-xs sm:text-sm opacity-90 mb-2">Your device will open the package installer. Tap <strong>Install</strong> to proceed.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/20">
            <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-red-300">Step 3: Handle Google Play Protect (if prompted)</h2>
            <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4">If Google Play Protect shows a warning, follow these steps:</p>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm font-medium mb-2">3a. When you see this screen, tap "More details":</p>
                <div className="bg-black/20 rounded-lg p-2">
                  <Image
                    src="/step1.jpg"
                    alt="Google Play Protect warning screen"
                    width={300}
                    height={200}
                    className="w-full max-w-xs sm:max-w-sm mx-auto rounded"
                  />
                </div>
              </div>
              
              <div>
                <p className="text-xs sm:text-sm font-medium mb-2">3b. Then tap "Install without scanning":</p>
                <div className="bg-black/20 rounded-lg p-2">
                  <Image
                    src="/step2.jpg"
                    alt="Install without scanning option"
                    width={300}
                    height={200}
                    className="w-full max-w-xs sm:max-w-sm mx-auto rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/20">
            <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-red-300">Step 4: Complete Installation</h2>
            <p className="text-xs sm:text-sm opacity-90">Once installation is complete, you can find TapCare in your app drawer and start using it!</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 sm:mt-8 text-center space-y-3 sm:space-y-4">
          <Link
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-colors duration-200 text-sm sm:text-base"
          >
            ← Back to Download
          </Link>

          </div>
        </div>
      </div>
  );
}