import React from 'react';
import { Users, Calendar, DollarSign, Star } from 'lucide-react';

const TutorDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Tutor</h1>
          <p className="text-gray-600">Ready to inspire and educate your students?</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Active Students */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Students</h3>
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-2">12</p>
            <p className="text-sm text-gray-600">Active students</p>
          </div>

          {/* Today's Sessions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Today</h3>
              <Calendar className="h-5 w-5 text-lime-600" />
            </div>
            <p className="text-2xl font-bold text-lime-600 mb-2">5</p>
            <p className="text-sm text-gray-600">Sessions scheduled</p>
          </div>

          {/* Monthly Earnings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Earnings</h3>
              <DollarSign className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-2">$1,240</p>
            <p className="text-sm text-gray-600">This month</p>
          </div>

          {/* Rating */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Rating</h3>
              <Star className="h-5 w-5 text-lime-600" />
            </div>
            <p className="text-2xl font-bold text-lime-600 mb-2">4.9</p>
            <p className="text-sm text-gray-600">Average rating</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Mathematics Session</p>
                  <p className="text-sm text-gray-600">10:00 AM - 11:00 AM with Alex</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-lime-50 rounded-lg">
                <div className="bg-lime-100 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-lime-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Physics Session</p>
                  <p className="text-sm text-gray-600">2:00 PM - 3:00 PM with Emma</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Chemistry Session</p>
                  <p className="text-sm text-gray-600">4:00 PM - 5:00 PM with David</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex text-yellow-400">
                    {'⭐'.repeat(5)}
                  </div>
                  <span className="text-sm text-gray-600">by Alex M.</span>
                </div>
                <p className="text-sm text-gray-700">"Excellent teaching style! Makes complex math concepts easy to understand."</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex text-yellow-400">
                    {'⭐'.repeat(5)}
                  </div>
                  <span className="text-sm text-gray-600">by Emma K.</span>
                </div>
                <p className="text-sm text-gray-700">"Very patient and knowledgeable. Physics is finally making sense!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;