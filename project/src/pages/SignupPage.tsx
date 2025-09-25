import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Mail, Lock, User, Phone, BookOpen } from 'lucide-react';

const SignupPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const roleFromUrl = searchParams.get('role');
  
  const [selectedRole, setSelectedRole] = useState<'student' | 'tutor'>(
    roleFromUrl === 'tutor' ? 'tutor' : 'student'
  );
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    subjects: '', // for tutors
    experience: '', // for tutors
    grade: '' // for students
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempted:', { ...formData, role: selectedRole });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Join GuruJi</h2>
            <p className="text-gray-600">Create your account and start learning</p>
          </div>

          {/* Role Selection */}
          <div className="flex mb-8">
            <button
              type="button"
              onClick={() => setSelectedRole('student')}
              className={`flex-1 py-3 px-4 rounded-l-lg font-semibold transition-colors duration-200 ${
                selectedRole === 'student'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              I'm a Student
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole('tutor')}
              className={`flex-1 py-3 px-4 rounded-r-lg font-semibold transition-colors duration-200 ${
                selectedRole === 'tutor'
                  ? 'bg-lime-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              I'm a Tutor
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Create a password"
                    required
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Role-specific fields */}
            {selectedRole === 'tutor' ? (
              <>
                <div>
                  <label htmlFor="subjects" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjects You Teach
                  </label>
                  <div className="relative">
                    <BookOpen className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                    <textarea
                      id="subjects"
                      name="subjects"
                      value={formData.subjects}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="e.g., Mathematics, Physics, Chemistry"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Teaching Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    required
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Less than 1 year</option>
                    <option value="intermediate">1-3 years</option>
                    <option value="experienced">3-5 years</option>
                    <option value="expert">5+ years</option>
                  </select>
                </div>
              </>
            ) : (
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Grade/Level
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                >
                  <option value="">Select your grade</option>
                  <option value="elementary">Elementary (K-5)</option>
                  <option value="middle">Middle School (6-8)</option>
                  <option value="high">High School (9-12)</option>
                  <option value="college">College/University</option>
                  <option value="adult">Adult Learning</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] ${
                selectedRole === 'tutor'
                  ? 'bg-lime-600 text-white hover:bg-lime-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Create {selectedRole === 'tutor' ? 'Tutor' : 'Student'} Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;