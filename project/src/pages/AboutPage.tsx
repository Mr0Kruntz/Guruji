import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-lime-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About GuruJi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering learners worldwide through personalized education and connecting passionate tutors with eager students.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To democratize quality education by making expert tutoring accessible to everyone, everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Focused Learning</h3>
              <p className="text-gray-600">Personalized attention to help each student reach their full potential</p>
            </div>

            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion for Teaching</h3>
              <p className="text-gray-600">Connecting students with tutors who are passionate about their subjects</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous vetting process ensures only the best tutors join our platform</p>
            </div>

            <div className="text-center">
              <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">Building a supportive learning community where everyone can thrive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                GuruJi was born from a simple observation: every student learns differently, yet traditional education often follows a one-size-fits-all approach. We believed there had to be a better way.
              </p>
              <p>
                Founded by educators and technology enthusiasts, GuruJi bridges the gap between expert knowledge and personalized learning. Our platform connects students with passionate tutors who understand that teaching is both an art and a science.
              </p>
              <p>
                Today, thousands of students and tutors from around the world are part of the GuruJi community, creating meaningful learning relationships that extend far beyond textbooks and exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Excellence</h3>
              <p className="text-blue-800">
                We strive for excellence in everything we do, from the quality of our tutors to the user experience on our platform.
              </p>
            </div>

            <div className="bg-lime-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-lime-900 mb-4">Accessibility</h3>
              <p className="text-lime-800">
                Quality education should be accessible to everyone, regardless of location, background, or financial situation.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Innovation</h3>
              <p className="text-blue-800">
                We continuously innovate to improve the learning experience and make education more effective and engaging.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;