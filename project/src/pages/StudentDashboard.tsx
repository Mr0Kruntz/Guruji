import React from 'react';
import { BookOpen, Calendar, Clock, User } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Student</h1>
          <p className="text-gray-600">Ready to continue your learning journey?</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* My Courses */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">My Courses</h3>
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-2">3</p>
            <p className="text-sm text-gray-600">Active courses</p>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Next Session</h3>
              <Calendar className="h-5 w-5 text-lime-600" />
            </div>
            <p className="text-2xl font-bold text-lime-600 mb-2">Tomorrow</p>
            <p className="text-sm text-gray-600">2:00 PM - Math</p>
          </div>

          {/* Study Hours */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Study Hours</h3>
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-2">24.5</p>
            <p className="text-sm text-gray-600">This month</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Sessions</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Mathematics</p>
                  <p className="text-sm text-gray-600">with John Smith • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-lime-100 p-2 rounded-full">
                  <BookOpen className="h-4 w-4 text-lime-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Physics</p>
                  <p className="text-sm text-gray-600">with Sarah Johnson • Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">My Tutors</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-gray-300 p-2 rounded-full">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">John Smith</p>
                  <p className="text-sm text-gray-600">Mathematics • 4.9 ⭐</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="bg-gray-300 p-2 rounded-full">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Physics • 4.8 ⭐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;