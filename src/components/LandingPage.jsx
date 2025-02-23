import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { 
  Shield, 
  LineChart, 
  Users, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Wallet,
  CircleDollarSign,
  CreditCard,
  BarChart2,
  BookOpen,
  Layers
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, path, navigate }) => (
  <div 
    className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all cursor-pointer group"
    onClick={() => navigate(path)}
  >
    <Icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('lender');
  const navigate = useNavigate();
  const { t, toggleLanguage, language } = useContext(LanguageContext);

  const services = [
    {
      icon: Wallet,
      title: t?.services?.assetManagement?.title || 'Asset Management',
      description: t?.services?.assetManagement?.description || 'Comprehensive digital asset management',
      path: "/assets"
    },
    {
      icon: BarChart2,
      title: t?.services?.transactionHistory?.title || 'Transaction History',
      description: t?.services?.transactionHistory?.description || 'Track your transactions',
      path: "/history"
    },
    {
      icon: Layers,
      title: t?.services?.defiServices?.title || 'DeFi Services',
      description: t?.services?.defiServices?.description || 'Explore decentralized finance',
      path: "/defi-services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-blue-400 cursor-pointer"
            onClick={() => navigate('/')}
          >
            ChainLending Hub
          </div>
          <div className="space-x-6">
            <button 
              onClick={() => navigate('/')} 
              className="hover:text-blue-400"
            >
              {t?.nav?.home || 'Home'}
            </button>
            <button 
              onClick={() => navigate('/product')} 
              className="hover:text-blue-400"
            >
              {t?.nav?.products || 'Products'}
            </button>
            <button 
              onClick={() => navigate('/dashboard')} 
              className="hover:text-blue-400"
            >
              {t?.nav?.dashboard || 'Dashboard'}
            </button>
            {/* 语言切换按钮 */}
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 border rounded hover:bg-blue-500/10"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
            >
              {t?.nav?.login || 'Login'}
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
            >
              {t?.nav?.register || 'Register'}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          {t?.hero?.title || 'Secure, Compliant Digital Asset Lending Platform'}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          {t?.hero?.subtitle || 'Connecting Global Investors, Unleashing Digital Asset Value'}
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/investment')}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg flex items-center"
          >
            {t?.hero?.startInvesting || 'Start Investing'} <ArrowRight className="ml-2" />
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="border border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-lg"
          >
            {t?.hero?.myDashboard || 'My Dashboard'}
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 py-16 bg-slate-800/50">
        <h2 className="text-3xl font-bold text-center mb-12">{t?.services?.title || 'Our Services'}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              navigate={navigate} 
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t?.features?.title || 'Platform Advantages'}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t?.features?.secure?.title || 'Secure & Reliable'}</h3>
            <p className="text-gray-400">{t?.features?.secure?.description || 'Smart contracts with multiple security guarantees'}</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <LineChart className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t?.features?.returns?.title || 'Stable Returns'}</h3>
            <p className="text-gray-400">{t?.features?.returns?.description || 'Flexible lending mechanism with quality return guarantees'}</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <Lock className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t?.features?.compliance?.title || 'Compliant Operation'}</h3>
            <p className="text-gray-400">{t?.features?.compliance?.description || 'Deep cooperation with regulatory authorities'}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t?.howItWorks?.title || 'How It Works'}</h2>
        <div className="flex justify-center mb-8">
          <div className="flex rounded-lg overflow-hidden">
            <button 
              className={`px-6 py-3 ${activeTab === 'lender' ? 'bg-blue-500' : 'bg-slate-700'}`}
              onClick={() => setActiveTab('lender')}
            >
              {t?.howItWorks?.lender || "I'm a Lender"}
            </button>
            <button 
              className={`px-6 py-3 ${activeTab === 'borrower' ? 'bg-blue-500' : 'bg-slate-700'}`}
              onClick={() => setActiveTab('borrower')}
            >
              {t?.howItWorks?.borrower || "I'm a Borrower"}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activeTab === 'lender' ? (
            <>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <Wallet className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t?.howItWorks?.lenderSteps?.deposit?.title || 'Deposit Assets'}</h3>
                <p className="text-gray-400">{t?.howItWorks?.lenderSteps?.deposit?.description || 'Complete KYC, deposit digital assets'}</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <LineChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t?.howItWorks?.lenderSteps?.select?.title || 'Choose Plan'}</h3>
                <p className="text-gray-400">{t?.howItWorks?.lenderSteps?.select?.description || 'Set lending terms and return requirements'}</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <CircleDollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t?.howItWorks?.lenderSteps?.earn?.title || 'Earn Returns'}</h3>
                <p className="text-gray-400">{t?.howItWorks?.lenderSteps?.earn?.description || 'Smart contracts auto-execute, receive regular returns'}</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t?.howItWorks?.borrowerSteps?.register?.title || 'Register'}</h3>
                <p className="text-gray-400">{t?.howItWorks?.borrowerSteps?.register?.description || 'Complete identity and credit assessment'}</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t?.howItWorks?.borrowerSteps?.apply?.title || 'Apply for Loan'}</h3>
                <p className="text-gray-400">{t?.howItWorks?.borrowerSteps?.apply?.description || 'Select loan amount and term'}</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{t?.howItWorks?.borrowerSteps?.receive?.title || 'Receive Funds'}</h3>
                <p className="text-gray-400">{t?.howItWorks?.borrowerSteps?.receive?.description || 'Auto-match funds, quick loan disbursement'}</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-blue-500/10 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$100M+</div>
              <div className="text-gray-400">{t?.stats?.tradingVolume || 'Trading Volume'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-400">{t?.stats?.users || 'Registered Users'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12%</div>
              <div className="text-gray-400">{t?.stats?.averageApy || 'Average APY'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-400">{t?.stats?.safetyRecord || 'Safety Record'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">{t?.cta?.title || 'Start Your Digital Asset Growth Journey'}</h2>
        <p className="text-xl text-gray-300 mb-8">{t?.cta?.subtitle || 'Join the leading digital asset lending platform'}</p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/register')}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg"
          >
            {t?.cta?.register || 'Sign Up Now'}
          </button>
          <button 
            onClick={() => navigate('/login')}
            className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg"
          >
            {t?.cta?.login || 'Login'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-gray-400">
            <div>
              <h4 className="font-bold mb-4">{t?.footer?.quickNav || 'Quick Navigation'}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/')} className="hover:text-blue-400">{t?.nav?.home || 'Home'}</button></li>
                <li><button onClick={() => navigate('/investment')} className="hover:text-blue-400">{t?.nav?.products || 'Products'}</button></li>
                <li><button onClick={() => navigate('/dashboard')} className="hover:text-blue-400">{t?.nav?.dashboard || 'Dashboard'}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t?.footer?.userService || 'User Service'}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/login')} className="hover:text-blue-400">{t?.nav?.login || 'Login'}</button></li>
                <li><button onClick={() => navigate('/register')} className="hover:text-blue-400">{t?.nav?.register || 'Register'}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t?.footer?.platformService || 'Platform Service'}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/history')} className="hover:text-blue-400">{t?.services?.transactionHistory?.title || 'Transaction History'}</button></li>
                <li><button onClick={() => navigate('/defi-services')} className="hover:text-blue-400">{t?.services?.defiServices?.title || 'DeFi Services'}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t?.footer?.contactUs || 'Contact Us'}</h4>
              <p>{t?.footer?.customerService || 'Customer Service: 400-XXX-XXXX'}</p>
              <p>{t?.footer?.email || 'Email: support@chainlendinghub.com'}</p>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            <p>{t?.footer?.copyright || '© 2025 ChainLending Hub. All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;