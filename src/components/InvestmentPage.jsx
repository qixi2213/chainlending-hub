import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Shield, LineChart, Users, Lock, CheckCircle, ArrowRight, Wallet } from 'lucide-react';

const InvestmentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { t } = useContext(LanguageContext);

  const investmentPlans = [
    {
      title: t?.investmentPage?.plans?.stable?.title || "稳健理财",
      apy: "8-12%",
      term: t?.investmentPage?.plans?.stable?.term || "30-90天",
      minAmount: t?.investmentPage?.plans?.stable?.minAmount || "1,000 USDT",
      risk: t?.investmentPage?.riskLevels?.low || "低",
    },
    {
      title: t?.investmentPage?.plans?.valueAdded?.title || "增值优选",
      apy: "12-18%",
      term: t?.investmentPage?.plans?.valueAdded?.term || "90-180天",
      minAmount: t?.investmentPage?.plans?.valueAdded?.minAmount || "5,000 USDT",
      risk: t?.investmentPage?.riskLevels?.medium || "中",
    },
    {
      title: t?.investmentPage?.plans?.highYield?.title || "高收益计划",
      apy: "18-25%",
      term: t?.investmentPage?.plans?.highYield?.term || "180-365天",
      minAmount: t?.investmentPage?.plans?.highYield?.minAmount || "10,000 USDT",
      risk: t?.investmentPage?.riskLevels?.mediumHigh || "中高",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t?.investmentPage?.title || '投资理财'}
          </h1>
          <p className="text-gray-400">
            {t?.investmentPage?.subtitle || '选择适合您的投资方案，开启数字资产增值之旅'}
          </p>
        </div>

        {/* Investment Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {investmentPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-slate-800 rounded-xl p-6 cursor-pointer transition-all
                ${selectedPlan === index ? 'ring-2 ring-blue-500' : 'hover:bg-slate-700'}
              `}
              onClick={() => setSelectedPlan(index)}
            >
              <h3 className="text-xl font-bold text-white mb-4">{plan.title}</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>{t?.investmentPage?.expectedAnnualYield || '预期年化收益'}</span>
                  <span className="text-blue-400">{plan.apy}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t?.investmentPage?.investmentTerm || '投资期限'}</span>
                  <span>{plan.term}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t?.investmentPage?.minimumInvestment || '起投金额'}</span>
                  <span>{plan.minAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t?.investmentPage?.riskLevel || '风险等级'}</span>
                  <span className="text-yellow-500">{plan.risk}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center">
                {t?.investmentPage?.investNow || '立即投资'} <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {t?.investmentPage?.features?.fundSecurity?.title || '资金安全'}
            </h3>
            <p className="text-gray-400">
              {t?.investmentPage?.features?.fundSecurity?.description || '多重安全保障机制，资金由第三方托管，智能合约自动执行'}
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl">
            <Wallet className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {t?.investmentPage?.features?.flexibleWithdrawal?.title || '灵活存取'}
            </h3>
            <p className="text-gray-400">
              {t?.investmentPage?.features?.flexibleWithdrawal?.description || '7*24小时自由存取，到期自动结算，收益实时可见'}
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl">
            <Lock className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {t?.investmentPage?.features?.riskManagement?.title || '风控管理'}
            </h3>
            <p className="text-gray-400">
              {t?.investmentPage?.features?.riskManagement?.description || '专业风控团队，全程监控风险，确保资金安全'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPage;