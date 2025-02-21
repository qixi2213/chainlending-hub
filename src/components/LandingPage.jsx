import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const services = [
    {
      icon: Wallet,
      title: "资产管理",
      description: "全面掌控您的数字资产，智能资产配置",
      path: "/assets"
    },
    {
      icon: BarChart2,
      title: "交易历史",
      description: "追踪每一笔交易，详细记录一目了然",
      path: "/history"
    },
    {
      icon: Layers,
      title: "DeFi服务",
      description: "探索去中心化金融的无限可能",
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
              首页
            </button>
            <button 
              onClick={() => navigate('/product')} 
              className="hover:text-blue-400"
            >
              产品
            </button>
            <button 
              onClick={() => navigate('/dashboard')} 
              className="hover:text-blue-400"
            >
              控制台
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
            >
              登录
            </button>
            <button 
              onClick={() => navigate('/register')}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
            >
              注册
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">
          安全、合规的数字资产借贷平台
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          连接全球投资者，释放数字资产价值
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/investment')}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg flex items-center"
          >
            开始投资 <ArrowRight className="ml-2" />
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="border border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-lg"
          >
            我的面板
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 py-16 bg-slate-800/50">
        <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
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
        <h2 className="text-3xl font-bold text-center mb-12">平台优势</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">安全可靠</h3>
            <p className="text-gray-400">
              智能合约自动执行，多重安全保障，资产安全无忧
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <LineChart className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">收益稳健</h3>
            <p className="text-gray-400">
              灵活的借贷机制，优质的收益回报，资产增值保障
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <Lock className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">合规运营</h3>
            <p className="text-gray-400">
              与监管机构深度合作，确保平台运营合法合规
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">如何使用</h2>
        <div className="flex justify-center mb-8">
          <div className="flex rounded-lg overflow-hidden">
            <button 
              className={`px-6 py-3 ${activeTab === 'lender' ? 'bg-blue-500' : 'bg-slate-700'}`}
              onClick={() => setActiveTab('lender')}
            >
              我是出借方
            </button>
            <button 
              className={`px-6 py-3 ${activeTab === 'borrower' ? 'bg-blue-500' : 'bg-slate-700'}`}
              onClick={() => setActiveTab('borrower')}
            >
              我是借入方
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activeTab === 'lender' ? (
            <>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <Wallet className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">存入资产</h3>
                <p className="text-gray-400">快速完成KYC认证，存入数字资产</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <LineChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">选择收益方案</h3>
                <p className="text-gray-400">灵活设置借贷期限和收益要求</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <CircleDollarSign className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">获取收益</h3>
                <p className="text-gray-400">智能合约自动执行，定期获取收益</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">注册认证</h3>
                <p className="text-gray-400">完成身份认证和信用评估</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">发起借贷</h3>
                <p className="text-gray-400">选择借贷金额和期限，提交申请</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">收到资金</h3>
                <p className="text-gray-400">自动匹配资金，快速完成放款</p>
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
              <div className="text-gray-400">交易总额</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-400">注册用户</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12%</div>
              <div className="text-gray-400">平均年化收益</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-400">安全记录</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          开启您的数字资产增值之旅
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          加入全球领先的数字资产借贷平台，实现资产价值最大化
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/register')}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg"
          >
            立即注册
          </button>
          <button 
            onClick={() => navigate('/login')}
            className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg"
          >
            登录
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-gray-400">
            <div>
              <h4 className="font-bold mb-4">快速导航</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/')} className="hover:text-blue-400">首页</button></li>
                <li><button onClick={() => navigate('/investment')} className="hover:text-blue-400">投资产品</button></li>
                <li><button onClick={() => navigate('/dashboard')} className="hover:text-blue-400">控制台</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">用户服务</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/login')} className="hover:text-blue-400">登录</button></li>
                <li><button onClick={() => navigate('/register')} className="hover:text-blue-400">注册</button></li>
                <li><button onClick={() => navigate('/assets')} className="hover:text-blue-400">资产管理</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">平台服务</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/history')} className="hover:text-blue-400">交易历史</button></li>
                <li><button onClick={() => navigate('/defi-services')} className="hover:text-blue-400">DeFi服务</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">联系我们</h4>
              <p>客服热线: 400-XXX-XXXX</p>
              <p>邮箱: support@chainlendinghub.com</p>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            <p>© 2025 ChainLending Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;