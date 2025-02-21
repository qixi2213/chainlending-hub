import React, { useState } from 'react';
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
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { 
      id: 'overview', 
      title: '平台概览', 
      icon: Globe,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">链融汇 - 创新DeFi借贷平台</h2>
          <p className="text-lg text-gray-300">
            链融汇是一个基于区块链技术的创新金融服务平台，专注于为欧美市场提供安全、合规且高效的虚拟货币借贷服务。
            我们通过先进的去中心化技术和严格的合规机制，为全球投资者开辟全新的资产管理和收益模式。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">合规安全</h3>
              <p className="text-gray-400">与受监管机构深度合作，确保交易合法合规</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <Zap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">高效智能</h3>
              <p className="text-gray-400">区块链智能合约实现全自动化交易流程</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">多元服务</h3>
              <p className="text-gray-400">提供全方位的数字资产金融服务解决方案</p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'problem', 
      title: '市场痛点', 
      icon: BarChart2,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">当前市场面临的挑战</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">闲置资产收益低</h3>
              <p className="text-gray-300">
                大量虚拟货币持有者长期持有资产，未能有效释放资金价值，资产利用率极低。
                传统金融模式无法为这些资产提供有吸引力的增值渠道。
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-red-400">借贷需求受限</h3>
              <p className="text-gray-300">
                传统金融机构对数字资产借贷存在严格限制，借款人难以获得灵活、高效的数字资产贷款服务。
                监管压力和合规问题导致借贷效率低下、成本高昂。
              </p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'solution', 
      title: '解决方案', 
      icon: Lock,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">链融汇的创新解决方案</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <Star className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">自动撮合与结算</h3>
              <p className="text-gray-400">
                利用区块链智能合约实现全自动化交易，降低人工干预风险，提高交易效率和透明度。
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">合规安全接入</h3>
              <p className="text-gray-400">
                与受监管机构深度合作，确保用户资金进出符合法规要求，降低法律和合规风险。
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <CreditCard className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">稳定币支持</h3>
              <p className="text-gray-400">
                引入稳定币作为中介资产，有效降低市场波动风险，为用户提供更稳定的借贷体验。
              </p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'customers', 
      title: '目标用户', 
      icon: Users,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">我们的目标用户群</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">虚拟货币持有者</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 希望提高闲置资产收益</li>
                <li>• 寻求安全、合规的资产管理方案</li>
                <li>• 追求灵活且有竞争力的投资回报</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">虚拟货币借入者</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 需要灵活的数字资产借贷服务</li>
                <li>• 进行投资、交易或其他金融活动</li>
                <li>• 愿意承担相应风险以获得更大机会</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'services', 
      title: '产品服务', 
      icon: Layers,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">最小可行性产品（MVP）功能</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">核心功能</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 用户注册与KYC认证</li>
                <li>• 借贷撮合引擎</li>
                <li>• 智能合约执行</li>
                <li>• 稳定币交易模块</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">安全与风控</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 实时交易监控</li>
                <li>• 风险预警系统</li>
                <li>• 动态利率调整</li>
                <li>• 资产风险评估</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">链融汇 产品介绍</div>
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
          加入链融汇，释放数字资产潜能
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          立即体验安全、高效的数字资产借贷服务
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => window.location.href = '/register'}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-white"
          >
            免费注册
          </button>
          <button 
            onClick={() => window.location.href = '/investment'}
            className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-lg"
          >
            了解更多
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 链融汇 ChainLending Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;