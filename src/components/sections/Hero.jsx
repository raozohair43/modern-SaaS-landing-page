import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              New Feature: AI-Powered Analytics
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business with{' '}
              <span className="text-blue-600">Smart Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Streamline your workflow, boost productivity, and scale your business with our comprehensive SaaS platform. 
              Join thousands of companies already growing with us.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group">
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading companies worldwide</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 lg:p-12">
              <div className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dashboard Preview</h3>
                  <p className="text-gray-600">Interactive demo coming soon</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 font-bold">⚡</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">📈</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 