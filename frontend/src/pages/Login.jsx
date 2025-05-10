import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setMsg('');

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login/', formData);
    const { tokens } = response.data;

    if (tokens?.access && tokens?.refresh) {
      localStorage.setItem("accessToken", tokens.access);
      localStorage.setItem("refreshToken", tokens.refresh);


      setMsg("Login Successful!");
      navigate('/');
    } else {
      setError("Token missing in response.");
    }
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    if (err.response?.data?.detail) {
      setError(err.response.data.detail);
      setMsg("Invalid credentials!");
    } else {
      setError('Something went wrong. Please try again.');
    }
  }
};

  return (
    <div className="flex mr-70 mt-10 flex-col md:flex-row min-h-screen">
      <div className="flex flex-col flex-1 md:ml-64 mt-5 items-center pt-12 px-4">
        <div className="bg-gradient-to-br from-[#060b28f0] to-[#0a0e234d] backdrop-blur-lg rounded-3xl shadow-xl p-5 sm:p-8 w-full max-w-md border-0 relative">
          <h1 className="text-2xl font-semibold text-center text-gray-200 mb-6">
            Sign in to your account
          </h1>

          {msg && <p className="text-center text-sm text-green-400 mb-4">{msg}</p>}
          {error && <p className="text-center text-sm text-red-400 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-300">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 bg-white/10 rounded focus:ring-purple-500"
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-purple-400 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              Sign in
            </button>

            <p className="text-sm text-gray-400 text-center">
              Don’t have an account yet?{' '}
              <Link to="/register" className="text-purple-400 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
