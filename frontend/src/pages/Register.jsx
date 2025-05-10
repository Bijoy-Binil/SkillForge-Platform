import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', formData);
      
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
      
      setMsg('Registration Successfully!');
      navigate('/')
    } catch (error) {
      console.error('Registration failed:', error.response?.data);
      setMsg('Invalid credentials!');
    }
  };

  return (
    <div className="flex mr-70 flex-col md:flex-row min-h-screen">
      <div className="flex flex-col flex-1 md:ml-64 mt-5 items-center pt-12 px-4">
        <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-md border-0 relative">
          <h1 className="text-2xl font-semibold text-center text-gray-200 mb-6">
            Create an account
          </h1>

          {/* ✅ Conditionally show the message if it exists */}
          {msg && (
            <p className="text-center text-sm text-red-400 mb-4">{msg}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              Create an account
            </button>

            <p className="text-sm text-gray-400 text-center">
              Already have an account?{' '}
              <a href="#" className="text-purple-400 font-medium hover:underline">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
