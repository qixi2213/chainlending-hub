import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { 
  Shield, 
  Globe, 
  Layers, 
  BarChart2, 
  Lock, 
  Users, 
  CreditCard, 
  TrendingUp,
  Star,
  Zap
} from 'lucide-react';

const ProductPage = () => {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { 
      id: 'overview', 
      title: t?.productPage?.sections?.overview || '平台概览', 
      icon: Globe,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            {t?.productPage?.overview?.title || '链融汇 - 创新DeFi借贷平台'}
          </h2>
          <p className="text-lg text-gray-300">
            {t?.productPage?.overview?.description || 
            '链融汇是一个基于区块链技术的创新金融服务平台，专注于为欧美市场提供安全、合规且高效的虚拟货币借贷服务。' +
            '我们通过先进的去中心化技术和严格的合规机制，为全球投资者开辟全新的资产管理和收益模式。'}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t?.productPage?.overview?.features?.compliance?.title || '合规安全'}
              </h3>
              <p className="text-gray-400">
                {t?.productPage?.overview?.features?.compliance?.description || '与受监管机构深度合作，确保交易合法合规'}
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t?.productPage?.overview?.features?.efficiency?.title || '高效智能'}
              </h3>
              <p className="text-gray-400">
                {t?.productPage?.overview?.features?.efficiency?.description || '区块链智能合约实现全自动化交易流程'}
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t?.productPage?.overview?.features?.services?.title || '多元服务'}
              </h3>
              <p className="text-gray-400">
                {t?.productPage?.overview?.features?.services?.description || '提供全方位的数字资产金融服务解决方案'}
              </p>
            </div>
          </div>
        </div>
      )
    },
    // 其他 sections 保持类似的多语言处理方式
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">
            {t?.productPage?.header || '链融汇 产品介绍'}
          </div>
        </nav>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                ${activeSection === section.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }
              `}
              onClick={() => setActiveSection(section.id)}
            >
              <section.icon size={20} />
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-8">
        {sections.find(section => section.id === activeSection)?.content}
      </div>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">
          {t?.productPage?.cta?.title || '加入链融汇，释放数字资产潜能'}
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          {t?.productPage?.cta?.subtitle || '立即体验安全、高效的数字资产借贷服务'}
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/register')}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-white"
          >
            {t?.productPage?.cta?.registerButton || '免费注册'}
          </button>
          <button 
            onClick={() => navigate('/investment')}
            className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-lg"
          >
            {t?.productPage?.cta?.learnMoreButton || '了解更多'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>{t?.productPage?.footer?.copyright || '© 2025 链融汇 ChainLending Hub. All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;