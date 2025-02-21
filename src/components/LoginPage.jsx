import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft, Github } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('email');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="bg-slate-800/50 p-8 rounded-xl w-full max-w-md">
        {/* 返回按钮和标题 */}
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-2xl font-bold text-white text-center flex-1">账户登录</h2>
        </div>

        {/* 登录方式选择 */}
        <div className="flex gap-4 mb-8">
          <button 
            className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2
              ${loginMethod === 'email' ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
            onClick={() => setLoginMethod('email')}
          >
            <Mail size={20} />
            邮箱登录
          </button>
          <button 
            className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2
              ${loginMethod === 'phone' ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
            onClick={() => setLoginMethod('phone')}
          >
            <User size={20} />
            手机登录
          </button>
        </div>

        {/* 登录表单 */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">邮箱地址</label>
            <input 
              type="email"
              className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder="请输入邮箱地址"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">密码</label>
            <input 
              type="password"
              className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder="请输入密码"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-500" />
              <span className="ml-2 text-gray-400">记住我</span>
            </label>
            <button 
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-blue-400 hover:text-blue-300"
            >
              忘记密码？
            </button>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            登录
          </button>
        </form>

        {/* 分割线 */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-4 text-gray-400">或</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        {/* 第三方登录 */}
        <div className="space-y-4">
          <button className="w-full bg-white hover:bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5" />
            使用 Google 账号登录
          </button>
          <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            <Github size={20} />
            使用 GitHub 账号登录
          </button>
        </div>

        {/* 注册链接 */}
        <p className="text-center mt-6 text-gray-400">
          还没有账户？
          <button 
            onClick={() => navigate('/register')} 
            className="text-blue-400 hover:text-blue-300 ml-2"
          >
            立即注册
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;