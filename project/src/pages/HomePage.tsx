import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn from the Best
              <span className="block text-blue-600">Tutors Worldwide</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with expert tutors for personalized learning experiences. Whether you're a student seeking knowledge or an educator ready to share expertise, GuruJi is your perfect learning companion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/signup?role=student"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <BookOpen className="h-5 w-5" />
                <span>Find a Tutor</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/signup?role=tutor"
                className="bg-lime-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-lime-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <Users className="h-5 w-5" />
                <span>Become a Tutor</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GuruJi?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of personalized education with our comprehensive platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Tutors</h3>
              <p className="text-gray-600">Learn from qualified professionals with proven track records in their fields</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors duration-200">
                <Users className="h-8 w-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Tailored lessons designed to match your learning style and pace</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track your progress and achieve your academic goals with our structured approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students and tutors who have transformed their educational journey with GuruJi
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;