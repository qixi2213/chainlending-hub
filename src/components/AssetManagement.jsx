import React, { useState } from 'react';
import { 
  Wallet, 
  ArrowRightLeft, 
  PlusCircle, 
  MinusCircle,
  ChevronDown,
  Clock,
  AlertCircle,
  LineChart
} from 'lucide-react';

const AssetManagement = () => {
  const [selectedAsset, setSelectedAsset] = useState('USDT');

  const assets = {
    total: '125,000.00',
    data: [
      {
        symbol: 'USDT',
        balance: '50,000.00',
        available: '45,000.00',
        locked: '5,000.00',
        value: '50,000.00',
        change: '+2.5%'
      },
      {
        symbol: 'BTC',
        balance: '1.5',
        available: '1.2',
        locked: '0.3',
        value: '45,000.00',
        change: '-1.2%'
      },
      {
        symbol: 'ETH',
        balance: '15.0',
        available: '12.5',
        locked: '2.5',
        value: '30,000.00',
        change: '+3.8%'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">资产管理</h1>
            <p className="text-gray-400">管理您的数字资产投资组合</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              <PlusCircle size={20} />
              充值
            </button>
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              <MinusCircle size={20} />
              提现
            </button>
            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              <ArrowRightLeft size={20} />
              转账
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">总资产估值 (USDT)</p>
                <h2 className="text-2xl font-bold text-white">${assets.total}</h2>
              </div>
              <Wallet className="text-blue-400" size={24} />
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">可用资产</p>
                <h2 className="text-2xl font-bold text-green-400">$98,500.00</h2>
              </div>
              <Clock className="text-green-400" size={24} />
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 mb-1">锁定资产</p>
                <h2 className="text-2xl font-bold text-yellow-400">$26,500.00</h2>
              </div>
              <AlertCircle className="text-yellow-400" size={24} />
            </div>
          </div>
        </div>

        {/* Asset List */}
        <div className="bg-slate-800 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-700">
            <h3 className="text-xl font-bold text-white">资产列表</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-gray-400 px-6 py-4">资产</th>
                <th className="text-right text-gray-400 px-6 py-4">总额</th>
                <th className="text-right text-gray-400 px-6 py-4">可用</th>
                <th className="text-right text-gray-400 px-6 py-4">锁定</th>
                <th className="text-right text-gray-400 px-6 py-4">估值(USDT)</th>
                <th className="text-right text-gray-400 px-6 py-4">24h涨跌</th>
                <th className="text-center text-gray-400 px-6 py-4">操作</th>
              </tr>
            </thead>
            <tbody>
              {assets.data.map((asset, index) => (
                <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                        {asset.symbol.charAt(0)}
                      </div>
                      <span className="text-white font-medium">{asset.symbol}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-white">{asset.balance}</td>
                  <td className="px-6 py-4 text-right text-white">{asset.available}</td>
                  <td className="px-6 py-4 text-right text-white">{asset.locked}</td>
                  <td className="px-6 py-4 text-right text-white">${asset.value}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={asset.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                      {asset.change}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="text-green-400 hover:text-green-300">充值</button>
                      <button className="text-red-400 hover:text-red-300">提现</button>
                      <button className="text-blue-400 hover:text-blue-300">交易</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Asset Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">资产分布</h3>
            <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">资产分布饼图</p>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">资产趋势</h3>
            <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">资产趋势图表</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManagement;