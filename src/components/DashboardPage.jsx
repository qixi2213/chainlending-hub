import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wallet, 
  History, 
  Settings, 
  LogOut, 
  LineChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Shield
} from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const assetData = {
    totalBalance: '125,000.00',
    totalProfit: '15,680.25',
    profitRate: '12.54',
    assetDistribution: [
      { name: 'USDT', value: '50,000', percentage: '40%', color: 'text-green-400' },
      { name: 'BTC', value: '45,000', percentage: '36%', color: 'text-orange-400' },
      { name: 'ETH', value: '30,000', percentage: '24%', color: 'text-blue-400' }
    ],
    recentTransactions: [
      {
        type: '存入',
        amount: '10,000 USDT',
        date: '2025-02-21 14:30',
        status: '成功',
        icon: <ArrowUpRight className="text-green-400" />,
      },
      {
        type: '借出',
        amount: '5,000 USDT',
        date: '2025-02-20 09:15',
        status: '进行中',
        icon: <ArrowDownRight className="text-red-400" />,
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 p-4">
        <div className="text-2xl font-bold text-blue-400 mb-8">ChainLending Hub</div>
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
              ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-slate-700'}`}
          >
            <LayoutDashboard size={20} />
            总览
          </button>
          <button 
            onClick={() => setActiveTab('assets')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
              ${activeTab === 'assets' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-slate-700'}`}
          >
            <Wallet size={20} />
            资产
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
              ${activeTab === 'history' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-slate-700'}`}
          >
            <History size={20} />
            历史记录
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
              ${activeTab === 'settings' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-slate-700'}`}
          >
            <Settings size={20} />
            设置
          </button>
        </nav>
        <div className="absolute bottom-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white"
          >
            <LogOut size={20} />
            退出登录
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">欢迎回来，用户</h1>
          <p className="text-gray-400">查看您的资产状况和投资表现</p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400">总资产 (USDT)</p>
                <h2 className="text-2xl font-bold text-white">${assetData.totalBalance}</h2>
              </div>
              <Wallet className="text-blue-400" size={24} />
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400">总收益 (USDT)</p>
                <h2 className="text-2xl font-bold text-green-400">+${assetData.totalProfit}</h2>
              </div>
              <LineChart className="text-green-400" size={24} />
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-400">收益率</p>
                <h2 className="text-2xl font-bold text-green-400">+{assetData.profitRate}%</h2>
              </div>
              <PieChart className="text-green-400" size={24} />
            </div>
          </div>
        </div>

        {/* Asset Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">资产分布</h3>
            <div className="space-y-4">
              {assetData.assetDistribution.map((asset, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-white">{asset.name}</p>
                    <p className={`${asset.color}`}>${asset.value}</p>
                  </div>
                  <div className="text-gray-400">{asset.percentage}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">最近交易</h3>
            <div className="space-y-4">
              {assetData.recentTransactions.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {transaction.icon}
                    <div>
                      <p className="text-white">{transaction.type}</p>
                      <p className="text-gray-400">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white">{transaction.amount}</p>
                    <p className="text-gray-400">{transaction.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Investments */}
        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">当前投资</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-white font-bold">稳定币理财</h4>
                  <p className="text-gray-400">USDT</p>
                </div>
                <Shield className="text-blue-400" size={20} />
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-400">投资金额</p>
                  <p className="text-white">$50,000</p>
                </div>
                <div>
                  <p className="text-gray-400">预期年化</p>
                  <p className="text-green-400">12%</p>
                </div>
                <div>
                  <p className="text-gray-400">剩余时间</p>
                  <p className="text-white">60天</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-white font-bold">流动性挖矿</h4>
                  <p className="text-gray-400">BTC-USDT</p>
                </div>
                <Clock className="text-green-400" size={20} />
              </div>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-400">投资金额</p>
                  <p className="text-white">$25,000</p>
                </div>
                <div>
                  <p className="text-gray-400">当前收益率</p>
                  <p className="text-green-400">15.8%</p>
                </div>
                <div>
                  <p className="text-gray-400">累计收益</p>
                  <p className="text-white">$1,580</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;