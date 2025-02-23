import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { 
  Calendar, 
  Search, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const TransactionHistory = () => {
  const { t } = useContext(LanguageContext);
  const [filter, setFilter] = useState('all');
  const [dateRange, setDateRange] = useState('7days');

  // 模拟交易数据
  const transactions = [
    {
      id: 1,
      type: t?.transactionHistory?.transactionTypes?.deposit || '存入',
      asset: 'USDT',
      amount: '10,000.00',
      status: t?.transactionHistory?.status?.success || '成功',
      time: '2025-02-21 14:30:25',
      txHash: '0x1234...5678',
      direction: 'in',
    },
    {
      id: 2,
      type: t?.transactionHistory?.transactionTypes?.lend || '借出',
      asset: 'USDT',
      amount: '5,000.00',
      status: t?.transactionHistory?.status?.inProgress || '进行中',
      time: '2025-02-20 09:15:10',
      txHash: '0x8765...4321',
      direction: 'out',
    },
    {
      id: 3,
      type: t?.transactionHistory?.transactionTypes?.yield || '收益发放',
      asset: 'USDT',
      amount: '125.50',
      status: t?.transactionHistory?.status?.success || '成功',
      time: '2025-02-19 00:00:00',
      txHash: '0xabcd...efgh',
      direction: 'in',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            {t?.transactionHistory?.title || '交易历史'}
          </h1>
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            <Download size={20} />
            {t?.transactionHistory?.exportRecords || '导出记录'}
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Search */}
          <div className="relative">
            <input 
              type="text"
              placeholder={t?.transactionHistory?.searchPlaceholder || '搜索交易...'}
              className="w-full bg-slate-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          {/* Transaction Type Filter */}
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-2">
            <button 
              className={`flex-1 px-3 py-1 rounded-md ${filter === 'all' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
              onClick={() => setFilter('all')}
            >
              {t?.transactionHistory?.filterTypes?.all || '全部'}
            </button>
            <button 
              className={`flex-1 px-3 py-1 rounded-md ${filter === 'in' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
              onClick={() => setFilter('in')}
            >
              {t?.transactionHistory?.filterTypes?.deposit || '存入'}
            </button>
            <button 
              className={`flex-1 px-3 py-1 rounded-md ${filter === 'out' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
              onClick={() => setFilter('out')}
            >
              {t?.transactionHistory?.filterTypes?.lend || '借出'}
            </button>
          </div>

          {/* Date Range */}
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-2">
            <button 
              className={`flex-1 px-3 py-1 rounded-md ${dateRange === '7days' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
              onClick={() => setDateRange('7days')}
            >
              {t?.transactionHistory?.dateRanges?.sevenDays || '7天'}
            </button>
            <button 
              className={`flex-1 px-3 py-1 rounded-md ${dateRange === '30days' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
              onClick={() => setDateRange('30days')}
            >
              {t?.transactionHistory?.dateRanges?.thirtyDays || '30天'}
            </button>
            <button 
              className={`flex-1 px-3 py-1 rounded-md ${dateRange === 'custom' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
              onClick={() => setDateRange('custom')}
            >
              {t?.transactionHistory?.dateRanges?.custom || '自定义'}
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-slate-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-gray-400 px-6 py-4">
                  {t?.transactionHistory?.tableHeaders?.type || '类型'}
                </th>
                <th className="text-left text-gray-400 px-6 py-4">
                  {t?.transactionHistory?.tableHeaders?.asset || '资产'}
                </th>
                <th className="text-left text-gray-400 px-6 py-4">
                  {t?.transactionHistory?.tableHeaders?.amount || '金额'}
                </th>
                <th className="text-left text-gray-400 px-6 py-4">
                  {t?.transactionHistory?.tableHeaders?.status || '状态'}
                </th>
                <th className="text-left text-gray-400 px-6 py-4">
                  {t?.transactionHistory?.tableHeaders?.time || '时间'}
                </th>
                <th className="text-left text-gray-400 px-6 py-4">
                  {t?.transactionHistory?.tableHeaders?.txHash || '交易哈希'}
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {tx.direction === 'in' ? (
                        <ArrowUpRight className="text-green-400" size={20} />
                      ) : (
                        <ArrowDownRight className="text-red-400" size={20} />
                      )}
                      <span className="text-white">{tx.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white">{tx.asset}</td>
                  <td className="px-6 py-4 text-white">{tx.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-sm
                      ${tx.status === '成功' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}
                    `}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{tx.time}</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300">{tx.txHash}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-gray-400">
            {t?.transactionHistory?.pagination?.showing || '显示 1-10 共 50 条记录'}
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white">
              <ChevronLeft size={20} />
            </button>
            <button className="px-4 py-2 bg-blue-500 rounded-lg text-white">1</button>
            <button className="px-4 py-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white">2</button>
            <button className="px-4 py-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white">3</button>
            <button className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;