import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { Mail, Lock, User, ArrowLeft, Github } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const [registerMethod, setRegisterMethod] = useState('email');

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
          <h2 className="text-2xl font-bold text-white text-center flex-1">
            {t?.registerPage?.title || '创建账户'}
          </h2>
        </div>

        {/* 注册方式选择 */}
        <div className="flex gap-4 mb-8">
          <button 
            className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2
              ${registerMethod === 'email' ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
            onClick={() => setRegisterMethod('email')}
          >
            <Mail size={20} />
            {t?.registerPage?.emailRegister || '邮箱注册'}
          </button>
          <button 
            className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2
              ${registerMethod === 'phone' ? 'bg-blue-500 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
            onClick={() => setRegisterMethod('phone')}
          >
            <User size={20} />
            {t?.registerPage?.phoneRegister || '手机注册'}
          </button>
        </div>

        {/* 注册表单 */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">
              {t?.registerPage?.emailLabel || '邮箱地址'}
            </label>
            <input 
              type="email"
              className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder={t?.registerPage?.emailPlaceholder || '请输入邮箱地址'}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">
              {t?.registerPage?.passwordLabel || '密码'}
            </label>
            <input 
              type="password"
              className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder={t?.registerPage?.passwordPlaceholder || '请设置登录密码'}
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">
              {t?.registerPage?.confirmPasswordLabel || '确认密码'}
            </label>
            <input 
              type="password"
              className="w-full bg-slate-700 rounded-lg px-4 py-3 text-white border border-slate-600 focus:border-blue-500 focus:outline-none"
              placeholder={t?.registerPage?.confirmPasswordPlaceholder || '请再次输入密码'}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            {t?.registerPage?.registerButton || '注册账户'}
          </button>
        </form>

        {/* 分割线 */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-4 text-gray-400">
            {t?.registerPage?.or || '或'}
          </span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        {/* 第三方登录 */}
        <div className="space-y-4">
          <button className="w-full bg-white hover:bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5" />
            {t?.registerPage?.googleRegister || '使用 Google 账号注册'}
          </button>
          <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            <Github size={20} />
            {t?.registerPage?.githubRegister || '使用 GitHub 账号注册'}
          </button>
        </div>

        {/* 登录链接 */}
        <p className="text-center mt-6 text-gray-400">
          {t?.registerPage?.existingAccount || '已有账户？'}
          <button 
            onClick={() => navigate('/login')} 
            className="text-blue-400 hover:text-blue-300 ml-2"
          >
            {t?.registerPage?.loginNow || '立即登录'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;