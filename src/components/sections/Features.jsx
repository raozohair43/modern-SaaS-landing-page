import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  BoltIcon, 
  UsersIcon 
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: "Advanced Analytics",
      description: "Get deep insights into your business performance with real-time analytics and customizable dashboards.",
      color: "blue"
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO integration, and compliance certifications.",
      color: "green"
    },
    {
      icon: BoltIcon,
      title: "Lightning Fast",
      description: "Built for speed with optimized performance, ensuring your team works efficiently without delays.",
      color: "yellow"
    },
    {
      icon: UsersIcon,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that keep your team connected and productive from anywhere.",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600",
      green: "bg-green-50 text-green-600", 
      yellow: "bg-yellow-50 text-yellow-600",
      purple: "bg-purple-50 text-purple-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help your business grow, scale, and thrive in today's competitive landscape.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4 group"
              >
                Learn more
                <svg 
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses already using our platform to grow and succeed.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 