// translations/index.js
export const translations = {
    en: {
      nav: {
        home: "Home",
        products: "Products",
        dashboard: "Dashboard",
        login: "Login",
        register: "Register"
      },
  
      hero: {
        title: "Secure, Compliant Digital Asset Lending Platform",
        subtitle: "Connecting Global Investors, Unleashing Digital Asset Value",
        startInvesting: "Start Investing",
        myDashboard: "My Dashboard"
      },
  
      dashboard: {
        title: "Dashboard",
        welcome: "Welcome back",
        welcomeSubtitle: "Check your asset status and investment performance",
        
        navItems: {
          overview: "Overview",
          assets: "Assets",
          history: "History",
          settings: "Settings"
        },
        
        logout: "Logout",
        
        totalAssets: "Total Assets (USDT)",
        totalProfit: "Total Profit (USDT)",
        profitRate: "Profit Rate",
        
        assetDistribution: "Asset Distribution",
        recentTransactions: "Recent Transactions",
        
        transactionTypes: {
          deposit: "Deposit",
          lend: "Lend",
          yield: "Yield Distribution"
        },
        
        transactionStatus: {
          success: "Success",
          inProgress: "In Progress"
        },
        
        currentInvestments: "Current Investments",
        
        investments: {
          stableCoinFinance: "Stablecoin Finance",
          liquidityMining: "Liquidity Mining",
          investmentAmount: "Investment Amount",
          expectedAnnualYield: "Expected Annual Yield",
          remainingTime: "Remaining Time",
          days: "Days",
          currentYield: "Current Yield",
          accumulatedProfit: "Accumulated Profit"
        }
      },
  
      assetManagement: {
        title: "Asset Management",
        description: "Manage your digital asset portfolio",
        deposit: "Deposit",
        withdraw: "Withdraw",
        transfer: "Transfer",
        totalAssetValue: "Total Asset Value (USDT)",
        availableAssets: "Available Assets",
        lockedAssets: "Locked Assets",
        assetList: "Asset List",
        assetDistribution: "Asset Distribution",
        assetTrend: "Asset Trend",
        assetDistributionChart: "Asset Distribution Chart",
        assetTrendChart: "Asset Trend Chart",
        tableHeaders: {
          asset: "Asset",
          total: "Total",
          available: "Available",
          locked: "Locked",
          value: "Value (USDT)",
          change: "24h Change",
          actions: "Actions"
        },
        actionButtons: {
          deposit: "Deposit",
          withdraw: "Withdraw",
          trade: "Trade"
        }
      },
  
      defiServices: {
        title: "DeFi Financial Services",
        subtitle: "Blockchain-based decentralized financial services, secure and transparent",
        lendingService: "Lending Services",
        miningService: "Yield Mining",
        annualYield: "Annual Yield",
        riskLevel: "Risk Level",
        lockPeriod: "Lock Period",
        joinNow: "Join Now",
        
        riskLevels: {
          low: "Low",
          medium: "Medium",
          mediumHigh: "Medium-High",
          high: "High"
        },
        
        lockPeriods: {
          flexible: "Flexible",
          thirtyDays: "From 30 Days",
          ninetyDays: "From 90 Days",
          singleTransaction: "Single Transaction"
        },
        
        lending: {
          stableCoinLending: {
            title: "Stablecoin Lending",
            description: "Lend using USDT, USDC, and other stablecoins, enjoy stable returns"
          },
          digitalAssetMortgage: {
            title: "Digital Asset Mortgage",
            description: "Mortgage mainstream cryptocurrencies like BTC, ETH to get mortgage returns"
          },
          flashLoan: {
            title: "Flash Loan",
            description: "Instant lending service without collateral, suitable for arbitrage trading",
            feeBasedApy: "Fee-based"
          }
        },
        
        mining: {
          liquidityMining: {
            title: "Liquidity Mining",
            description: "Provide liquidity to earn high returns and participate in platform governance"
          },
          regularFinance: {
            title: "Regular Finance",
            description: "Lock-in period for higher returns with principal safety guaranteed"
          },
          smartInvestmentPortfolio: {
            title: "Smart Investment Portfolio",
            description: "Automatically configure optimal investment strategies, balancing risk and return"
          }
        },
        
        riskWarning: {
          title: "Risk Warning",
          content: "Digital asset investment has high-risk characteristics and requires caution. The platform has adopted multiple security measures to protect assets, but market risks and technical risks still exist. Please invest only after fully understanding the product characteristics and risks."
        }
      },
  
      investmentPage: {
        title: "Investment Management",
        subtitle: "Choose your investment plan and start your digital asset growth journey",
        expectedAnnualYield: "Expected Annual Yield",
        investmentTerm: "Investment Term",
        minimumInvestment: "Minimum Investment",
        riskLevel: "Risk Level",
        investNow: "Invest Now",
        
        riskLevels: {
          low: "Low",
          medium: "Medium", 
          mediumHigh: "Medium-High"
        },
        
        plans: {
          stable: {
            title: "Stable Finance",
            term: "30-90 Days",
            minAmount: "1,000 USDT"
          },
          valueAdded: {
            title: "Value-Added Selection",
            term: "90-180 Days",
            minAmount: "5,000 USDT"
          },
          highYield: {
            title: "High-Yield Plan",
            term: "180-365 Days",
            minAmount: "10,000 USDT"
          }
        },
        
        features: {
          fundSecurity: {
            title: "Fund Security",
            description: "Multiple security protection mechanisms, funds managed by third parties, smart contracts automatically executed"
          },
          flexibleWithdrawal: {
            title: "Flexible Withdrawal",
            description: "Free deposit and withdrawal 24/7, automatic settlement upon maturity, real-time earnings visible"
          },
          riskManagement: {
            title: "Risk Management",
            description: "Professional risk control team, monitoring risks throughout, ensuring fund safety"
          }
        }
      },
  
      loginPage: {
        title: "Account Login",
        emailLogin: "Email Login",
        phoneLogin: "Phone Login",
        emailLabel: "Email Address",
        emailPlaceholder: "Please enter your email address",
        passwordLabel: "Password",
        passwordPlaceholder: "Please enter your password",
        rememberMe: "Remember Me",
        forgotPassword: "Forgot Password?",
        loginButton: "Login",
        or: "or",
        googleLogin: "Login with Google",
        githubLogin: "Login with GitHub",
        noAccount: "Don't have an account?",
        registerNow: "Register Now"
      },
  
      registerPage: {
        title: "Create Account",
        emailRegister: "Email Registration",
        phoneRegister: "Phone Registration",
        emailLabel: "Email Address",
        emailPlaceholder: "Please enter your email address",
        passwordLabel: "Password",
        passwordPlaceholder: "Please set your login password",
        confirmPasswordLabel: "Confirm Password",
        confirmPasswordPlaceholder: "Please enter your password again",
        registerButton: "Register Account",
        or: "or",
        googleRegister: "Register with Google",
        githubRegister: "Register with GitHub",
        existingAccount: "Already have an account?",
        loginNow: "Login Now"
      },
  
      transactionHistory: {
        title: "Transaction History",
        exportRecords: "Export Records",
        searchPlaceholder: "Search transactions...",
        
        filterTypes: {
          all: "All",
          deposit: "Deposit",
          lend: "Lend"
        },
        
        dateRanges: {
          sevenDays: "7 Days",
          thirtyDays: "30 Days",
          custom: "Custom"
        },
        
        tableHeaders: {
          type: "Type",
          asset: "Asset",
          amount: "Amount",
          status: "Status",
          time: "Time",
          txHash: "Transaction Hash"
        },
        
        transactionTypes: {
          deposit: "Deposit",
          lend: "Lend",
          yield: "Yield Distribution"
        },
        
        status: {
          success: "Success",
          inProgress: "In Progress"
        },
        
        pagination: {
          showing: "Showing 1-10 of 50 records"
        }
      },
  
      productPage: {
        header: "ChainLending Product Introduction",
        
        sections: {
          overview: "Platform Overview",
          problem: "Market Challenges",
          solution: "Our Solution",
          customers: "Target Users",
          services: "Product Services"
        },
        
        overview: {
          title: "ChainLending - Innovative DeFi Lending Platform",
          description: "ChainLending is an innovative financial service platform based on blockchain technology, focusing on providing safe, compliant, and efficient cryptocurrency lending services for the European and American markets. We open up new asset management and revenue models for global investors through advanced decentralized technology and strict compliance mechanisms.",
          
          features: {
            compliance: {
              title: "Compliant & Secure",
              description: "Deeply cooperate with regulatory institutions to ensure legal and compliant transactions"
            },
            efficiency: {
              title: "Efficient & Smart",
              description: "Blockchain smart contracts achieve fully automated transaction processes"
            },
            services: {
              title: "Diverse Services",
              description: "Provide comprehensive digital asset financial service solutions"
            }
          }
        },
        
        cta: {
          title: "Join ChainLending, Unleash Digital Asset Potential",
          subtitle: "Experience Safe and Efficient Digital Asset Lending Services",
          registerButton: "Free Registration",
          learnMoreButton: "Learn More"
        },
        
        footer: {
          copyright: "© 2025 ChainLending Hub. All rights reserved."
        }
      }
    },
  
    zh: {
      nav: {
        home: "首页",
        products: "产品",
        dashboard: "控制台",
        login: "登录",
        register: "注册"
      },
  
      hero: {
        title: "安全、合规的数字资产借贷平台",
        subtitle: "连接全球投资者，释放数字资产价值",
        startInvesting: "开始投资",
        myDashboard: "我的面板"
      },
  
      dashboard: {
        title: "控制台",
        welcome: "欢迎回来",
        welcomeSubtitle: "查看您的资产状况和投资表现",
        
        navItems: {
          overview: "总览",
          assets: "资产",
          history: "历史记录",
          settings: "设置"
        },
        
        logout: "退出登录",
        
        totalAssets: "总资产 (USDT)",
        totalProfit: "总收益 (USDT)",
        profitRate: "收益率",
        
        assetDistribution: "资产分布",
        recentTransactions: "最近交易",
        
        transactionTypes: {
          deposit: "存入",
          lend: "借出",
          yield: "收益发放"
        },
        
        transactionStatus: {
          success: "成功",
          inProgress: "进行中"
        },
        
        currentInvestments: "当前投资",
        
        investments: {
          stableCoinFinance: "稳定币理财",
          liquidityMining: "流动性挖矿",
          investmentAmount: "投资金额",
          expectedAnnualYield: "预期年化",
          remainingTime: "剩余时间",
          days: "天",
          currentYield: "当前收益率",
          accumulatedProfit: "累计收益"
        }
      },
  
      assetManagement: {
        title: "资产管理",
        description: "管理您的数字资产投资组合",
        deposit: "充值",
        withdraw: "提现",
        transfer: "转账",
        totalAssetValue: "总资产估值 (USDT)",
        availableAssets: "可用资产",
        lockedAssets: "锁定资产",
        assetList: "资产列表",
        assetDistribution: "资产分布",
        assetTrend: "资产趋势",
        assetDistributionChart: "资产分布图",
        assetTrendChart: "资产趋势图",
        tableHeaders: {
          asset: "资产",
          total: "总额",
          available: "可用",
          locked: "锁定",
          value: "估值 (USDT)",
          change: "24h 涨跌",
          actions: "操作"
        },
        actionButtons: {
          deposit: "充值",
          withdraw: "提现",
          trade: "交易"
        }
      },
  
      defiServices: {
        title: "DeFi 金融服务",
        subtitle: "基于区块链智能合约的去中心化金融服务，安全透明，收益稳健",
        lendingService: "借贷服务",
        miningService: "收益挖矿",
        annualYield: "年化收益",
        riskLevel: "风险等级",
        lockPeriod: "锁定期限",
        joinNow: "立即参与",
        
        riskLevels: {
          low: "低",
          medium: "中",
          mediumHigh: "中高",
          high: "高"
        },
        
        lockPeriods: {
          flexible: "灵活",
          thirtyDays: "30天起",
          ninetyDays: "90天起",
          singleTransaction: "单笔交易"
        },
        
        lending: {
          stableCoinLending: {
            title: "稳定币借贷",
            description: "使用USDT、USDC等稳定币进行借贷，享受稳定收益"
          },
          digitalAssetMortgage: {
            title: "数字资产质押",
            description: "质押BTC、ETH等主流币种，获取质押收益"
          },
          flashLoan: {
            title: "闪电贷",
            description: "无需抵押的即时借贷服务，适合套利交易",
            feeBasedApy: "按笔收费"
          }
        },
        
        mining: {
          liquidityMining: {
            title: "流动性挖矿",
            description: "提供流动性获取高额收益，参与平台治理"
          },
          regularFinance: {
            title: "定期理财",
            description: "锁定期限获取更高收益，本金安全有保障"
          },
          smartInvestmentPortfolio: {
            title: "智能投资组合",
            description: "自动配置最优投资策略，平衡风险与收益"
          }
        },
        
        riskWarning: {
          title: "风险提示",
          content: "数字资产投资具有高风险特征，投资需谨慎。平台已采取多重安全措施保障资产安全，但市场风险、技术风险等依然存在。请务必在充分了解产品特征和风险的基础上进行投资。"
        }
      },
  
      investmentPage: {
        title: "投资理财",
        subtitle: "选择适合您的投资方案，开启数字资产增值之旅",
        expectedAnnualYield: "预期年化收益",
        investmentTerm: "投资期限",
        minimumInvestment: "起投金额",
        riskLevel: "风险等级",
        investNow: "立即投资",
        
        riskLevels: {
          low: "低",
          medium: "中",
          mediumHigh: "中高"
        },
        
        plans: {
          stable: {
            title: "稳健理财",
            term: "30-90天",
            minAmount: "1,000 USDT"
          },
          valueAdded: {
            title: "增值优选",
            term: "90-180天",
            minAmount: "5,000 USDT"
          },
          highYield: {
            title: "高收益计划",
            term: "180-365天",
            minAmount: "10,000 USDT"
          }
        },
        
        features: {
          fundSecurity: {
            title: "资金安全",
            description: "多重安全保障机制，资金由第三方托管，智能合约自动执行"
          },
          flexibleWithdrawal: {
            title: "灵活存取",
            description: "7*24小时自由存取，到期自动结算，收益实时可见"
          },
          riskManagement: {
            title: "风控管理",
            description: "专业风控团队，全程监控风险，确保资金安全"
          }
        }
      },
  
      loginPage: {
        title: "账户登录",
        emailLogin: "邮箱登录",
        phoneLogin: "手机登录",
        emailLabel: "邮箱地址",
        emailPlaceholder: "请输入邮箱地址",
        passwordLabel: "密码",
        passwordPlaceholder: "请输入密码",
        rememberMe: "记住我",
        forgotPassword: "忘记密码？",
        loginButton: "登录",
        or: "或",
        googleLogin: "使用 Google 账号登录",
        githubLogin: "使用 GitHub 账号登录",
        noAccount: "还没有账户？",
        registerNow: "立即注册"
      },
  
      registerPage: {
        title: "创建账户",
        emailRegister: "邮箱注册",
        phoneRegister: "手机注册",
        emailLabel: "邮箱地址",
        emailPlaceholder: "请输入邮箱地址",
        passwordLabel: "密码",
        passwordPlaceholder: "请设置登录密码",
        confirmPasswordLabel: "确认密码",
        confirmPasswordPlaceholder: "请再次输入密码",
        registerButton: "注册账户",
        or: "或",
        googleRegister: "使用 Google 账号注册",
        githubRegister: "使用 GitHub 账号注册",
        existingAccount: "已有账户？",
        loginNow: "立即登录"
      },
  
      transactionHistory: {
        title: "交易历史",
        exportRecords: "导出记录",
        searchPlaceholder: "搜索交易...",
        
        filterTypes: {
          all: "全部",
          deposit: "存入",
          lend: "借出"
        },
        
        dateRanges: {
          sevenDays: "7天",
          thirtyDays: "30天",
          custom: "自定义"
        },
        
        tableHeaders: {
          type: "类型",
          asset: "资产",
          amount: "金额",
          status: "状态",
          time: "时间",
          txHash: "交易哈希"
        },
        
        transactionTypes: {
          deposit: "存入",
          lend: "借出",
          yield: "收益发放"
        },
        
        status: {
          success: "成功",
          inProgress: "进行中"
        },
        
        pagination: {
          showing: "显示 1-10 共 50 条记录"
        }
      },
  
      productPage: {
        header: "链融汇 产品介绍",
        
        sections: {
          overview: "平台概览",
          problem: "市场痛点",
          solution: "解决方案",
          customers: "目标用户",
          services: "产品服务"
        },
        
        overview: {
          title: "链融汇 - 创新DeFi借贷平台",
          description: "链融汇是一个基于区块链技术的创新金融服务平台，专注于为欧美市场提供安全、合规且高效的虚拟货币借贷服务。我们通过先进的去中心化技术和严格的合规机制，为全球投资者开辟全新的资产管理和收益模式。",
          
          features: {
            compliance: {
              title: "合规安全",
              description: "与受监管机构深度合作，确保交易合法合规"
            },
            efficiency: {
              title: "高效智能",
              description: "区块链智能合约实现全自动化交易流程"
            },
            services: {
              title: "多元服务",
              description: "提供全方位的数字资产金融服务解决方案"
            }
          }
        },
        
        cta: {
          title: "加入链融汇，释放数字资产潜能",
          subtitle: "立即体验安全、高效的数字资产借贷服务",
          registerButton: "免费注册",
          learnMoreButton: "了解更多"
        },
        
        footer: {
          copyright: "© 2025 链融汇 ChainLending Hub. 保留所有权利"
        }
      }
    }
  };