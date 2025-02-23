import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { 
  Wallet, 
  LineChart, 
  Shield, 
  ArrowRight, 
  RefreshCw,
  Timer,
  Zap,
  BookOpen
} from 'lucide-react';

const DefiServicesPage = () => {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  const [activeService, setActiveService] = useState('lending');

  const services = {
    lending: [
      {
        title: t?.defiServices?.lending?.stableCoinLending?.title || "稳定币借贷",
        description: t?.defiServices?.lending?.stableCoinLending?.description || "使用USDT、USDC等稳定币进行借贷，享受稳定收益",
        apy: "8-15%",
        risk: t?.defiServices?.riskLevels?.low || "低",
        lockPeriod: t?.defiServices?.lockPeriods?.flexible || "灵活",
        icon: <Wallet className="w-8 h-8 text-blue-400" />
      },
      {
        title: t?.defiServices?.lending?.digitalAssetMortgage?.title || "数字资产质押",
        description: t?.defiServices?.lending?.digitalAssetMortgage?.description || "质押BTC、ETH等主流币种，获取质押收益",
        apy: "5-12%",
        risk: t?.defiServices?.riskLevels?.medium || "中",
        lockPeriod: t?.defiServices?.lockPeriods?.thirtyDays || "30天起",
        icon: <Shield className="w-8 h-8 text-blue-400" />
      },
      {
        title: t?.defiServices?.lending?.flashLoan?.title || "闪电贷",
        description: t?.defiServices?.lending?.flashLoan?.description || "无需抵押的即时借贷服务，适合套利交易",
        apy: t?.defiServices?.lending?.flashLoan?.feeBasedApy || "按笔收费",
        risk: t?.defiServices?.riskLevels?.high || "高",
        lockPeriod: t?.defiServices?.lockPeriods?.singleTransaction || "单笔交易",
        icon: <Zap className="w-8 h-8 text-blue-400" />
      }
    ],
    mining: [
      {
        title: t?.defiServices?.mining?.liquidityMining?.title || "流动性挖矿",
        description: t?.defiServices?.mining?.liquidityMining?.description || "提供流动性获取高额收益，参与平台治理",
        apy: "15-25%",
        risk: t?.defiServices?.riskLevels?.mediumHigh || "中高",
        lockPeriod: t?.defiServices?.lockPeriods?.flexible || "灵活",
        icon: <RefreshCw className="w-8 h-8 text-green-400" />
      },
      {
        title: t?.defiServices?.mining?.regularFinance?.title || "定期理财",
        description: t?.defiServices?.mining?.regularFinance?.description || "锁定期限获取更高收益，本金安全有保障",
        apy: "12-18%",
        risk: t?.defiServices?.riskLevels?.low || "低",
        lockPeriod: t?.defiServices?.lockPeriods?.ninetyDays || "90天起",
        icon: <Timer className="w-8 h-8 text-green-400" />
      },
      {
        title: t?.defiServices?.mining?.smartInvestmentPortfolio?.title || "智能投资组合",
        description: t?.defiServices?.mining?.smartInvestmentPortfolio?.description || "自动配置最优投资策略，平衡风险与收益",
        apy: "10-20%",
        risk: t?.defiServices?.riskLevels?.medium || "中",
        lockPeriod: t?.defiServices?.lockPeriods?.flexible || "灵活",
        icon: <BookOpen className="w-8 h-8 text-green-400" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t?.defiServices?.title || 'DeFi 金融服务'}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t?.defiServices?.subtitle || '基于区块链智能合约的去中心化金融服务，安全透明，收益稳健'}
          </p>
        </div>

        {/* Service Type Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-3 rounded-lg flex items-center gap-2
              ${activeService === 'lending' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
            onClick={() => setActiveService('lending')}
          >
            <Wallet size={20} />
            {t?.defiServices?.lendingService || '借贷服务'}
          </button>
          <button 
            className={`px-6 py-3 rounded-lg flex items-center gap-2
              ${activeService === 'mining' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}`}
            onClick={() => setActiveService('mining')}
          >
            <LineChart size={20} />
            {t?.defiServices?.miningService || '收益挖矿'}
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services[activeService].map((service, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-slate-700 p-3 rounded-lg">{service.icon}</div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">
                    {t?.defiServices?.annualYield || '年化收益'}
                  </div>
                  <div className="text-xl font-bold text-blue-400">{service.apy}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-400">
                    {t?.defiServices?.riskLevel || '风险等级'}
                  </div>
                  <div className="text-white">{service.risk}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">
                    {t?.defiServices?.lockPeriod || '锁定期限'}
                  </div>
                  <div className="text-white">{service.lockPeriod}</div>
                </div>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center">
                {t?.defiServices?.joinNow || '立即参与'} <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Risk Warning */}
        <div className="mt-12 bg-slate-800/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            {t?.defiServices?.riskWarning?.title || '风险提示'}
          </h3>
          <p className="text-gray-400">
            {t?.defiServices?.riskWarning?.content || 
            '数字资产投资具有高风险特征，投资需谨慎。平台已采取多重安全措施保障资产安全，' +
            '但市场风险、技术风险等依然存在。请务必在充分了解产品特征和风险的基础上进行投资。'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefiServicesPage;