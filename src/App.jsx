import { useEffect, useMemo, useState } from 'react'
import './index.css'

// Simple i18n dictionary and helper
const I18N = {
  EN: {
    brand: 'KZTE Wallet', brandSub: 'tenge onchain · Intebix',
    home: 'Home', transfer: 'Transfer', swap: 'Swap', history: 'History', profile: 'Profile',
    aiAssistant: 'AI Assistant',
    homeWidget: 'Home Widget', yourBalance: 'Your Balance', todaysChange: 'Today\'s Change', tapToTransfer: 'Tap to Transfer',
    network: 'Network', addFunds: 'Add Funds', withdraw: 'Withdraw', recentActivity: 'Recent Activity',
    sendKZTE: 'Send KZTE', walletOrQR: 'Wallet Address / QR', phoneNumber: 'Phone Number', scanQR: 'Scan QR', amountInKZT: 'Amount in ₸', feeFast: 'Fee: ₸ {fee} · Fast', confirmTransfer: 'Confirm Transfer',
    swapKZTE: 'Swap KZTE', swapSub: 'Simple swap at fast rates', from: 'From', to: 'To', rate: 'Rate', youReceive: 'You Receive', doSwap: 'Swap', amount: 'Amount',
    activity: 'Activity', all: 'All', send: 'Send', receive: 'Receive', dateFilter: 'Filter by Date', chooseDate: 'Choose Date', today: 'Today', days7: '7 days', days30: '30 days',
    profileSettings: 'Profile & Settings', kycStatus: 'KYC Status', verified: 'Verified', walletBackup: 'Backup', backupSub: 'Seed-phrase · Social recovery', language: 'Language',
    aiAsk: 'Ask: "What does this fee mean?"', tip: 'Tip', aiText: 'Fees for KZTE on {chain} network are typically under ₸ 30.',
    askPlaceholder: 'Type your question…', 
    thinking: 'Thinking…', 
    clear: 'Clear', 
    answer: 'Answer', 
    errorOccurred: 'An error occurred. Please try again.', 
    noAnswer: 'No answer received.',
    connected: 'Connected to Intebix', depositReq: 'Deposit request sent', withdrawSched: 'Withdrawal scheduled', txConfirmed: 'Transaction confirmed', swapExecuted: 'Swap executed',
    deposit: 'Deposit', withdrawAction: 'Withdraw', cancel: 'Cancel', confirm: 'Confirm', demoAddress: 'Insert demo address',
    // Transaction detail modal translations
    transactionDetails: 'Transaction Details', operationType: 'Operation Type', sum: 'Amount', usdEquivalent: 'USD Equivalent', 
    recipientAddress: 'Recipient Address', source: 'Source', swapPair: 'Swap Pair', time: 'Time', status: 'Status',
    transactionAmount: 'Transaction Amount', transactionTime: 'Transaction Time', transactionStatus: 'Transaction Status',
    copyAddress: 'Copy address', viewInExplorer: 'View in explorer', share: 'Share', repeatTransaction: 'Repeat transaction',
    shareTransaction: 'Share Transaction',
    addressCopied: 'Address copied', featureInDevelopment: 'Feature in development',
    // Swap error messages
    insufficientFunds: 'Insufficient funds', invalidAmount: 'Invalid amount', selectToken: 'Select token',
    rateUnavailable: 'Rate unavailable', swapFailed: 'Swap failed', swapCompletedSuccessfully: 'Swap completed successfully',
    max: 'Max', swapDirection: 'Swap direction', balance: 'Balance',
    sending: 'Sending', receiving: 'Receiving', swapping: 'Swapping', completed: 'Completed',
    // Chart translations
    detailedChart: 'Detailed Chart', income: 'Income', expenses: 'Expenses', swaps: 'Swaps', 
    recentOperations: 'Recent Operations', dailyChange: 'daily change', period7d: '7D', 
    period30d: '30D', period3m: '3M', viewChart: 'View Chart'
  },
  RU: {
    brand: 'KZTE Кошелек', brandSub: 'тенге ончейн · Intebix',
    home: 'Главная', transfer: 'Перевод', swap: 'Обмен', history: 'История', profile: 'Профиль',
    aiAssistant: 'AI Помощник',
    homeWidget: 'Главный виджет', yourBalance: 'Ваш баланс', todaysChange: 'Изменение за день', tapToTransfer: 'Нажмите для перевода',
    network: 'Сеть', addFunds: 'Пополнить', withdraw: 'Вывести', recentActivity: 'Недавняя активность',
    sendKZTE: 'Отправить KZTE', walletOrQR: 'Адрес кошелька / QR', phoneNumber: 'Номер телефона', scanQR: 'Сканировать QR', amountInKZT: 'Сумма в ₸', feeFast: 'Комиссия: ₸ {fee} · Быстро', confirmTransfer: 'Подтвердить перевод',
    swapKZTE: 'Обменять KZTE', swapSub: 'Простой обмен по быстрому курсу', from: 'Из', to: 'В', rate: 'Курс', youReceive: 'Вы получите', doSwap: 'Обменять', amount: 'Сумма',
    activity: 'Активность', all: 'Все', send: 'Отправка', receive: 'Получение', dateFilter: 'Фильтр по дате', chooseDate: 'Выбрать период', today: 'Сегодня', days7: '7 дней', days30: '30 дней',
    profileSettings: 'Профиль и настройки', kycStatus: 'Статус KYC', verified: 'Подтвержден', walletBackup: 'Резервная копия', backupSub: 'Seed-фраза · Социальное восстановление', language: 'Язык',
    aiAsk: 'Спросите: «Что означает эта комиссия?»', tip: 'Совет', aiText: 'Комиссии за KZTE в сети {chain} обычно менее ₸ 30.',
    askPlaceholder: 'Введите ваш вопрос…', 
    thinking: 'Думаю…', 
    clear: 'Очистить', 
    answer: 'Ответ', 
    errorOccurred: 'Произошла ошибка. Попробуйте снова.', 
    noAnswer: 'Ответ не получен.',
    connected: 'Подключено к Intebix', depositReq: 'Запрос на пополнение отправлен', withdrawSched: 'Вывод запланирован', txConfirmed: 'Транзакция подтверждена', swapExecuted: 'Обмен выполнен',
    deposit: 'Пополнение', withdrawAction: 'Вывод', cancel: 'Отмена', confirm: 'Подтвердить', demoAddress: 'Вставить демо-адрес',
    // Transaction detail modal translations
    transactionDetails: 'Детали транзакции', operationType: 'Тип операции', sum: 'Сумма', usdEquivalent: 'Эквивалент в $', 
    recipientAddress: 'Адрес получателя', source: 'Источник', swapPair: 'Пара обмена', time: 'Время', status: 'Статус',
    transactionAmount: 'Сумма транзакции', transactionTime: 'Время транзакции', transactionStatus: 'Статус транзакции',
    copyAddress: 'Скопировать адрес', viewInExplorer: 'Посмотреть в explorer', share: 'Поделиться', repeatTransaction: 'Повторить транзакцию',
    shareTransaction: 'Поделиться транзакцией',
    addressCopied: 'Адрес скопирован', featureInDevelopment: 'Функция в разработке',
    // Swap error messages
    insufficientFunds: 'Недостаточно средств', invalidAmount: 'Некорректная сумма', selectToken: 'Выберите токен',
    rateUnavailable: 'Курс недоступен', swapFailed: 'Ошибка обмена', swapCompletedSuccessfully: 'Обмен успешно завершен',
    max: 'Макс', swapDirection: 'Поменять направление', balance: 'Баланс',
    sending: 'Отправка', receiving: 'Получение', swapping: 'Обмен', completed: 'Завершено',
    // Chart translations
    detailedChart: 'Детальный график', income: 'Доходы', expenses: 'Расходы', swaps: 'Обмены', 
    recentOperations: 'Последние операции', dailyChange: 'за день', period7d: '7Д', 
    period30d: '30Д', period3m: '3М', viewChart: 'Посмотреть график'
  },
  KZ: {
    brand: 'KZTE Әмиян', brandSub: 'теңге ончейн · Intebix',
    home: 'Басты', transfer: 'Аудару', swap: 'Алмасу', history: 'Тарих', profile: 'Профиль',
    aiAssistant: 'AI Көмекші',
    homeWidget: 'Басты виджет', yourBalance: 'Сіздің баланс', todaysChange: 'Бүгінгі өзгеріс', tapToTransfer: 'Аудару үшін басыңыз',
    network: 'Желі', addFunds: 'Толықтыру', withdraw: 'Шығару', recentActivity: 'Соңғы әрекеттер',
    sendKZTE: 'KZTE жіберу', walletOrQR: 'Әмиян адресі / QR', phoneNumber: 'Телефон нөмірі', scanQR: 'QR сканерлеу', amountInKZT: 'Сома ₸', feeFast: 'Комиссия: ₸ {fee} · Жылдам', confirmTransfer: 'Аударуды растау',
    swapKZTE: 'KZTE алмастыру', swapSub: 'Жылдам курспен қарапайым алмастыру', from: 'Қайдан', to: 'Қайда', rate: 'Курс', youReceive: 'Сіз аласыз', doSwap: 'Алмастыру', amount: 'Сома',
    activity: 'Әрекеттер', all: 'Барлығы', send: 'Жіберу', receive: 'Қабылдау', dateFilter: 'Күн бойынша сүзгі', chooseDate: 'Мерзім таңдау', today: 'Бүгін', days7: '7 күн', days30: '30 күн',
    profileSettings: 'Профиль және баптаулар', kycStatus: 'KYC күйі', verified: 'Расталды', walletBackup: 'Көшірме', backupSub: 'Seed-фраза · Әлеум. кіру', language: 'Тіл',
    aiAsk: 'Сұраңыз: «Бұл комиссия нені білдіреді?»', tip: 'Кеңес', aiText: '{chain} желісіндегі KZTE үшін комиссиялар әдетте ₸ 30-дан төмен.',
    askPlaceholder: 'Сұрағыңызды жазыңыз…', 
    thinking: 'Ойланып жатыр…', 
    clear: 'Тазарту', 
    answer: 'Жауап', 
    errorOccurred: 'Қате пайда болды. Қайта көріңіз.', 
    noAnswer: 'Жауап алынбады.',
    connected: 'Intebix-ке қосылды', depositReq: 'Толықтыру сұранымы жіберілді', withdrawSched: 'Шығару жоспарланды', txConfirmed: 'Транзакция расталды', swapExecuted: 'Алмасу орындалды',
    deposit: 'Толықтыру', withdrawAction: 'Шығару', cancel: 'Болдырмау', confirm: 'Растау', demoAddress: 'Демо адресті енгізу',
    // Transaction detail modal translations
    transactionDetails: 'Транзакция мәліметтері', operationType: 'Операция түрі', sum: 'Сома', usdEquivalent: 'Доллардағы баламасы', 
    recipientAddress: 'Алушы адресі', source: 'Көзі', swapPair: 'Алмасу жұбы', time: 'Уақыт', status: 'Күйі',
    transactionAmount: 'Транзакция сомасы', transactionTime: 'Транзакция уақыты', transactionStatus: 'Транзакция күйі',
    copyAddress: 'Адресті көшіру', viewInExplorer: 'Explorer-де көру', share: 'Бөлісу', repeatTransaction: 'Транзакцияны қайталау',
    shareTransaction: 'Транзакциямен бөлісу',
    addressCopied: 'Адрес көшірілді', featureInDevelopment: 'Функция әзірленуде',
    // Swap error messages
    insufficientFunds: 'Қаражат жеткіліксіз', invalidAmount: 'Дұрыс емес сома', selectToken: 'Токен таңдаңыз',
    rateUnavailable: 'Курс қолжетімсіз', swapFailed: 'Алмасу қатесі', swapCompletedSuccessfully: 'Алмасу сәтті аяқталды',
    max: 'Макс', swapDirection: 'Бағытты өзгерту', balance: 'Баланс',
    sending: 'Жіберу', receiving: 'Қабылдау', swapping: 'Алмасу', completed: 'Аяқталды',
    // Chart translations
    detailedChart: 'Толық график', income: 'Кірістер', expenses: 'Шығыстар', swaps: 'Алмасулар', 
    recentOperations: 'Соңғы операциялар', dailyChange: 'күндік өзгеріс', period7d: '7К', 
    period30d: '30К', period3m: '3А', viewChart: 'Графикті көру'
  }
};

const useT = (lang) => (key, vars = {}) => {
  const dict = I18N[lang] || I18N.EN;
  const str = dict[key] || I18N.EN[key] || key;
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ''));
};
// Simple icons using inline SVG
const Icon = ({ name, size = 20 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 };
  switch (name) {
    case 'send': return (<svg {...common}><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7Z"/></svg>);
    case 'receive': return (<svg {...common}><path d="M3 3v18"/><path d="M7 7h10l-3 3m0 0 3 3H7"/></svg>);
    case 'swap': return (<svg {...common}><path d="M3 9h13l-3-3"/><path d="M21 15H8l3 3"/></svg>);
    case 'dashboard': return (<svg {...common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>);
    case 'profile': return (<svg {...common}><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>);
    case 'ai': return (<svg {...common}><path d="M4 4h16v10H12l-4 4v-4H4z"/></svg>);
    case 'kzte': return (<svg {...common}><path d="M6 4h12M6 9h12M12 4v16M7 20h10"/></svg>);
    default: return null;
  }
};

const BottomNav = ({ current, onChange, t }) => {
  const items = [
    { key: 'dashboard', label: t('home'), icon: 'dashboard' },
    { key: 'transfer', label: t('transfer'), icon: 'send' },
    { key: 'swap', label: t('swap'), icon: 'swap' },
    { key: 'history', label: t('history'), icon: 'receive' },
    { key: 'profile', label: t('profile'), icon: 'profile' },
  ];
  return (
    <nav className="bottom-nav">
      <ul>
        {items.map(item => (
          <li key={item.key}>
            <button className={current === item.key ? 'active' : ''} onClick={() => onChange(item.key)}>
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Header = ({ chain, setChain, onOpenAI, t }) => {
  const chains = ['Ethereum', 'TON', 'Polygon'];
  return (
    <header className="header">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="brand">
          <div className="brand-badge" />
          <div>
            <div className="brand-title">{t('brand')}</div>
            <div className="brand-sub">{t('brandSub')}</div>
          </div>
        </div>
        <div className="header-actions">
          <select className="select" value={chain} onChange={(e) => setChain(e.target.value)} style={{ padding: '8px 10px' }}>
            {chains.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button className="btn outline" aria-label={t('aiAssistant')} onClick={onOpenAI}>
            <Icon name="ai" />
          </button>
        </div>
      </div>
    </header>
  )
}

const Modal = ({ title, children, onClose }) => (
  <div className="modal-backdrop" onClick={onClose}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="title" style={{ marginBottom: 8 }}>{title}</div>
      <div className="subtitle" style={{ marginBottom: 12 }}>KZTE Wallet</div>
      {children}
      <div className="spacer-12" />
      <button className="btn primary" onClick={onClose}>OK</button>
    </div>
  </div>
);

const Dashboard = ({ chain, balanceKZTE, onAddFunds, onWithdraw, onStartTransfer, t, history, onTransactionClick, setShowChartModal }) => {
  const usdRate = 1 / 500; // mock: 500 ₸ ≈ $1
  const usd = (balanceKZTE * usdRate).toFixed(2);
  const recentTransactions = (history || []).slice(0, 3); // Показываем только последние 3 транзакции
  
  return (
    <main style={{ padding: 16 }}>
      <div className="card" style={{ background: 'rgba(255,255,255,0.04)' }} onClick={onStartTransfer}>
        <div className="muted">{t('homeWidget')}</div>
        <div className="spacer-8" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="subtitle">{t('yourBalance')}</div>
            <div className="title">₸ {balanceKZTE.toLocaleString('en-US')}</div>
          </div>
          <div className="kzte-badge">{t('todaysChange')}: +1.2%</div>
        </div>
        <div className="spacer-8" />
        <div className="accent-text">{t('tapToTransfer')}</div>
      </div>

      <div className="card">
        <div className="subtitle">{t('network')}: {chain}</div>
        <div className="spacer-8" />
        <div className="balance-large">₸ {balanceKZTE.toLocaleString('en-US')}</div>
        <div className="balance-usd">≈ $ {usd}</div>
        <div className="spacer-12" />
        <div className="grid two-col">
          <button className="btn primary" onClick={onAddFunds}>{t('addFunds')}</button>
          <button className="btn" onClick={onWithdraw}>{t('withdraw')}</button>
        </div>
      </div>

      <div className="spacer-12" />
      <div className="card" onClick={() => setShowChartModal(true)} style={{ cursor: 'pointer' }}>
        <div className="title">{t('recentActivity')}</div>
        <div className="spacer-8" />
        <div className="sparkline" />
        <div className="spacer-8" />
        <div className="accent-text" style={{ fontSize: '12px', textAlign: 'center' }}>
          {t('viewChart') || 'Нажмите для просмотра детального графика'}
        </div>
      </div>

      <div className="spacer-12" />
      <div className="card">
        <div className="list">
          {recentTransactions.map((tx, i) => (
            <div 
              key={i} 
              className="list-item" 
              onClick={() => onTransactionClick(tx)}
              style={{ cursor: 'pointer' }}
            >
              <div className="left">
                <div className={`icon-circle ${tx.type === 'send' ? 'icon-send' : tx.type === 'recv' ? 'icon-recv' : 'icon-swap'}`}>
                  <Icon name={tx.type === 'send' ? 'send' : tx.type === 'recv' ? 'receive' : 'swap'} />
                </div>
                <div>{tx.label}</div>
              </div>
              <div style={{ 
                color: tx.amount > 0 ? '#4ade80' : '#f87171', 
                fontWeight: '600' 
              }}>
                {tx.amount > 0 ? '+' : ''}₸ {Math.abs(tx.amount).toLocaleString('en-US')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

const Transfer = ({ onConfirm, t }) => {
  const [mode, setMode] = useState('address'); // 'address' | 'phone'
  const [target, setTarget] = useState('');
  const [amount, setAmount] = useState('');
  const [showQR, setShowQR] = useState(false);
  const fee = 15; // ₸ mock fee
  return (
    <main style={{ padding: 16 }}>
      <div className="card">
        <div className="title">{t('sendKZTE')}</div>
        <div className="spacer-12" />
        <div className="input-row">
          <select className="select" value={mode} onChange={e => setMode(e.target.value)}>
            <option value="address">{t('walletOrQR')}</option>
            <option value="phone">{t('phoneNumber')}</option>
          </select>
          <button className="btn outline" onClick={() => setShowQR(true)}>{t('scanQR')}</button>
        </div>
        <div className="spacer-12" />
        <input className="input" placeholder={mode === 'address' ? '0x… or TON address' : '+7 (7xx) xxx-xx-xx'} value={target} onChange={e => setTarget(e.target.value)} />
        <div className="spacer-12" />
        <input className="input" placeholder={t('amountInKZT')} value={amount} onChange={e => setAmount(e.target.value)} />
        <div className="spacer-12" />
        <div className="subtitle">{t('feeFast', { fee })}</div>
        <div className="spacer-12" />
        <button className="btn primary" onClick={() => onConfirm({ target, amount, fee })}>{t('confirmTransfer')}</button>
      </div>
      {showQR && (
        <Modal title={t('scanQR')} onClose={() => setShowQR(false)}>
          <div className="subtitle">QR demo</div>
          <div className="spacer-12" />
          <button className="btn primary" onClick={() => { setTarget('0xDEMOaDDre55'); setShowQR(false); }}>
            {t('demoAddress')}
          </button>
        </Modal>
      )}
    </main>
  )
}

const Swap = ({ 
  swapFromToken, 
  setSwapFromToken, 
  swapToToken, 
  setSwapToToken, 
  swapAmount, 
  setSwapAmount, 
  swapReceiveAmount, 
  swapRate, 
  swapError, 
  swapLoading, 
  rateLoading, 
  balances, 
  handleSwap, 
  handleSwapDirection, 
  getSwapButtonText, 
  isSwapButtonEnabled, 
  t 
}) => {
  const availableTokens = ['KZTE', 'USDT', 'BTC', 'ETH'];
  
  // Handle Max button click
  const handleMaxClick = () => {
    if (swapFromToken && balances[swapFromToken]) {
      setSwapAmount(balances[swapFromToken].toString());
    }
  };

  // Simplified validation - just check if amount is valid number
  const isValidAmount = swapAmount && !isNaN(parseFloat(swapAmount)) && parseFloat(swapAmount) > 0;

  return (
    <main style={{ padding: 16 }}>
      <div className="card">
        <div className="title">{t('swapKZTE')}</div>
        <div className="subtitle">{t('swapSub')}</div>
        <div className="spacer-12" />
        
        {/* From Section */}
        <div>
          <div className="muted">{t('from')}</div>
          <div className="spacer-8" />
          <div className="grid" style={{ gridTemplateColumns: '1fr auto' }}>
            <select 
              className="select" 
              value={swapFromToken} 
              onChange={e => setSwapFromToken(e.target.value)}
              style={{ marginRight: '8px' }}
            >
              <option value="">{t('selectToken')}</option>
              {availableTokens.map(token => (
                <option key={token} value={token}>
                  {token} {token === 'KZTE' ? '₸' : ''}
                </option>
              ))}
            </select>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                className="input" 
                placeholder={t('amount')} 
                value={swapAmount} 
                onChange={e => setSwapAmount(e.target.value)}
                type="number"
                min="0"
                step="any"
                style={{ width: '120px' }}
              />
              <button 
                className="btn outline" 
                onClick={handleMaxClick}
                disabled={!swapFromToken || !balances[swapFromToken]}
                style={{ padding: '8px 12px', fontSize: '12px' }}
              >
                {t('max')}
              </button>
            </div>
          </div>
          {swapFromToken && balances[swapFromToken] && (
            <div className="muted" style={{ fontSize: '12px', marginTop: '4px' }}>
              {t('balance')}: {balances[swapFromToken].toLocaleString()} {swapFromToken}
            </div>
          )}
        </div>

        <div className="spacer-12" />

        {/* Swap Direction Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            className="btn outline" 
            onClick={handleSwapDirection}
            disabled={!swapFromToken || !swapToToken}
            style={{ 
              padding: '8px 16px', 
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ↕ {t('swapDirection')}
          </button>
        </div>

        <div className="spacer-12" />

        {/* To Section */}
        <div>
          <div className="muted">{t('to')}</div>
          <div className="spacer-8" />
          <select 
            className="select" 
            value={swapToToken} 
            onChange={e => setSwapToToken(e.target.value)}
          >
            <option value="">{t('selectToken')}</option>
            {availableTokens.filter(token => token !== swapFromToken).map(token => (
              <option key={token} value={token}>
                {token} {token === 'KZTE' ? '₸' : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="spacer-12" />

        {/* Rate Display */}
        {swapFromToken && swapToToken && swapRate > 0 && (
          <div className="subtitle">
            {rateLoading ? (
              <span>{t('rate')}: Loading...</span>
            ) : (
              <span>{t('rate')}: 1 {swapFromToken} = {swapRate.toExponential(2)} {swapToToken}</span>
            )}
          </div>
        )}

        <div className="spacer-8" />

        {/* You Receive */}
        <div className="title">
          {t('youReceive')}: {swapReceiveAmount || '0'} {swapToToken || ''}
        </div>

        {/* Network Fee (Mock) */}
        {swapFromToken && swapToToken && swapAmount && (
          <div className="muted" style={{ fontSize: '12px', marginTop: '4px' }}>
            Network Fee: ~0.001 {swapFromToken}
          </div>
        )}

        <div className="spacer-12" />

        {/* Error Display */}
        {swapError && (
          <div style={{ 
            color: '#ef4444', 
            fontSize: '14px', 
            marginBottom: '12px',
            padding: '8px',
            background: '#fef2f2',
            borderRadius: '8px',
            border: '1px solid #fecaca'
          }}>
            {swapError}
          </div>
        )}

        {/* Swap Button */}
        <button 
          className={`btn ${isSwapButtonEnabled() ? 'primary' : ''}`}
          onClick={handleSwap}
          disabled={!isSwapButtonEnabled()}
          style={{
            width: '100%',
            opacity: isSwapButtonEnabled() ? 1 : 0.6
          }}
        >
          {getSwapButtonText()}
        </button>
      </div>
    </main>
  )
}

const History = ({ items, t, onTransactionClick }) => {
  const [filter, setFilter] = useState('all');
  const [showDate, setShowDate] = useState(false);
  const filtered = (items || []).filter(i => filter === 'all' ? true : i.type === filter);
  return (
    <main style={{ padding: 16 }}>
      <div className="card">
        <div className="title">{t('activity')}</div>
        <div className="spacer-12" />
        <div className="input-row">
          <select className="select" value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">{t('all')}</option>
            <option value="send">{t('send')}</option>
            <option value="recv">{t('receive')}</option>
            <option value="swap">Swap</option>
          </select>
          <button className="btn outline" onClick={() => setShowDate(true)}>{t('dateFilter')}</button>
        </div>
        <div className="spacer-12" />
        <div className="list">
          {filtered.map((i, idx) => (
            <div key={idx} className="list-item" onClick={() => onTransactionClick(i)} style={{ cursor: 'pointer' }}>
              <div className="left">
                <div className={`icon-circle ${i.type === 'send' ? 'icon-send' : i.type === 'recv' ? 'icon-recv' : 'icon-swap'}`}>
                  <Icon name={i.type === 'send' ? 'send' : i.type === 'recv' ? 'receive' : 'swap'} />
                </div>
                <div>
                  <div>{i.label}</div>
                  <div className="subtitle">{i.date}</div>
                </div>
              </div>
              <div style={{ 
                color: i.amount > 0 ? '#4ade80' : '#f87171',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                {i.amount > 0 ? '+' : ''}₸ {Math.abs(i.amount).toLocaleString('en-US')}
              </div>
            </div>
          ))}
        </div>
      </div>
      {showDate && (
        <Modal title={t('chooseDate')} onClose={() => setShowDate(false)}>
          <div className="grid two-col">
            <button className="btn" onClick={() => setShowDate(false)}>{t('today')}</button>
            <button className="btn" onClick={() => setShowDate(false)}>{t('days7')}</button>
            <button className="btn" onClick={() => setShowDate(false)}>{t('days30')}</button>
          </div>
        </Modal>
      )}
    </main>
  )
}

const Profile = ({ language, setLanguage, t }) => {
  return (
    <main style={{ padding: 16 }}>
      <div className="card">
        <div className="title">{t('profileSettings')}</div>
        <div className="spacer-12" />
        <div className="grid">
          <div className="list-item">
            <div className="left"><Icon name="kzte" /><div>{t('kycStatus')}</div></div>
            <div><span className="kzte-badge">{t('verified')}</span></div>
          </div>
          <div className="list-item">
            <div className="left"><Icon name="profile" /><div>{t('walletBackup')}</div></div>
            <div className="subtitle">{t('backupSub')}</div>
          </div>
          <div className="list-item">
            <div className="left"><Icon name="dashboard" /><div>{t('language')}</div></div>
            <select className="select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="EN">EN</option>
              <option value="RU">RU</option>
              <option value="KZ">KZ</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  )
}

function App() {
  const [tab, setTab] = useState('dashboard');
  const [chain, setChain] = useState('Ethereum');
  const [language, setLanguage] = useState('EN');
  const [showAI, setShowAI] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiReply, setAiReply] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);
  const [showTransactionDetail, setShowTransactionDetail] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showChartModal, setShowChartModal] = useState(false);
  const [chartPeriod, setChartPeriod] = useState('30D');
  const [showShareModal, setShowShareModal] = useState(false);

  // Swap functionality states
  const [swapFromToken, setSwapFromToken] = useState('KZTE');
  const [swapToToken, setSwapToToken] = useState('BTC');
  const [swapAmount, setSwapAmount] = useState('');
  const [swapReceiveAmount, setSwapReceiveAmount] = useState(0);
  const [swapRate, setSwapRate] = useState(0);
  const [swapLoading, setSwapLoading] = useState(false);
  const [swapError, setSwapError] = useState('');
  const [rateLoading, setRateLoading] = useState(false);

  // Missing state variables for Swap functionality
  const [balances, setBalances] = useState({
    KZTE: 50000,
    BTC: 0.5,
    ETH: 2.3,
    USDT: 1000
  });
  const [transactions, setTransactions] = useState([]);
  const [notification, setNotification] = useState(null);

  const t = useT(language);

  // Swap validation functions
  const validateSwapAmount = (amount, token) => {
    if (!amount || amount === '0') {
      return t('invalidAmount');
    }
    
    if (!token) {
      return t('selectToken');
    }
    
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return t('invalidAmount');
    }
    
    // Check balance
    const tokenBalance = balances[token] || 0;
    if (numAmount > tokenBalance) {
      return t('insufficientFunds');
    }
    
    return null;
  };

  const validateSwapTokens = (fromToken, toToken) => {
    if (!fromToken) {
      return t('selectToken') + ' (From)';
    }
    if (!toToken) {
      return t('selectToken') + ' (To)';
    }
    if (fromToken === toToken) {
      return 'Cannot swap same token';
    }
    return null;
  };

  // Function to get exchange rate (mock implementation)
  const getExchangeRate = async (fromToken, toToken) => {
    setRateLoading(true);
    try {
      // Mock API call - replace with real API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock rates
      const rates = {
        'KZTE-BTC': 0.0000000333,
        'KZTE-ETH': 0.000000456,
        'KZTE-USDT': 0.0123,
        'BTC-KZTE': 30030030,
        'ETH-KZTE': 2192982,
        'USDT-KZTE': 81.3,
        'BTC-ETH': 15.2,
        'ETH-BTC': 0.0658,
        'BTC-USDT': 42000,
        'USDT-BTC': 0.0000238,
        'ETH-USDT': 2800,
        'USDT-ETH': 0.000357
      };
      
      const rateKey = `${fromToken}-${toToken}`;
      const rate = rates[rateKey] || 1;
      
      setSwapRate(rate);
      return rate;
    } catch (error) {
      setSwapError(t('rateUnavailable'));
      return null;
    } finally {
      setRateLoading(false);
    }
  };

  // Calculate receive amount
  const calculateReceiveAmount = (amount, rate) => {
    if (!amount || !rate) return '0';
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return '0';
    return (numAmount * rate).toFixed(8);
  };

  // Handle max button click
  const handleMaxAmount = () => {
    if (swapFromToken && balances[swapFromToken]) {
      setSwapAmount(balances[swapFromToken].toString());
    }
  };

  // Handle swap direction
  const handleSwapDirection = () => {
    const tempFromToken = swapFromToken;
    const tempToToken = swapToToken;
    setSwapFromToken(tempToToken);
    setSwapToToken(tempFromToken);
    setSwapAmount('');
    setSwapReceiveAmount('0');
    setSwapRate(0);
  };

  // useEffect for automatic rate fetching and receive amount calculation
  useEffect(() => {
    if (swapFromToken && swapToToken && swapFromToken !== swapToToken) {
      getExchangeRate(swapFromToken, swapToToken);
    }
  }, [swapFromToken, swapToToken]);

  // useEffect for calculating receive amount when amount or rate changes
  useEffect(() => {
    if (swapAmount && swapRate) {
      const receiveAmount = calculateReceiveAmount(swapAmount, swapRate);
      setSwapReceiveAmount(receiveAmount);
    } else {
      setSwapReceiveAmount('0');
    }
  }, [swapAmount, swapRate]);

  // Handle swap amount change with validation
  const handleSwapAmountChange = (value) => {
    setSwapAmount(value);
    setSwapError('');
    
    // Validate amount
    const error = validateSwapAmount(value, swapFromToken);
    if (error) {
      setSwapError(error);
    }
  };

  // Handle token selection with validation
  const handleSwapTokenChange = (type, token) => {
    if (type === 'from') {
      setSwapFromToken(token);
    } else {
      setSwapToToken(token);
    }
    
    setSwapError('');
    
    // Validate tokens
    const fromToken = type === 'from' ? token : swapFromToken;
    const toToken = type === 'to' ? token : swapToToken;
    const error = validateSwapTokens(fromToken, toToken);
    if (error) {
      setSwapError(error);
    }
  };

  // Simplified swap button validation
  const isSwapButtonEnabled = () => {
    return swapFromToken && swapToToken && swapAmount && parseFloat(swapAmount) > 0 && !swapLoading;
  };

  // Simplified swap execution
  const handleSwap = async () => {
    if (!isSwapButtonEnabled()) return;
    
    setSwapLoading(true);
    setSwapError('');
    
    try {
      // Mock swap transaction
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple balance update
      const fromAmount = parseFloat(swapAmount);
      const toAmount = fromAmount * (swapRate || 1);
      
      setBalances(prev => ({
        ...prev,
        [swapFromToken]: Math.max(0, (prev[swapFromToken] || 0) - fromAmount),
        [swapToToken]: (prev[swapToToken] || 0) + toAmount
      }));
      
      // Reset form
      setSwapAmount('');
      setSwapReceiveAmount('0');
      
      // Show success
      alert('Swap completed successfully!');
      
    } catch (error) {
      setSwapError('Swap failed. Please try again.');
    } finally {
      setSwapLoading(false);
    }
  };

  // Get swap button text based on state
  const getSwapButtonText = () => {
    if (swapLoading) return t('swapping') + '...';
    if (!swapFromToken || !swapToToken) return t('selectToken');
    if (!swapAmount || swapAmount === '0') return t('amount');
    if (swapError) return swapError;
    return t('doSwap');
  };

  // Функция для генерации данных графика в зависимости от периода
  const getChartData = (period) => {
    const baseValue = 50000;
    const data = {
      '7D': [
        { x: 50, y: 120, value: '₸ 48,500', date: '1 дек' },
        { x: 100, y: 110, value: '₸ 49,200', date: '2 дек' },
        { x: 150, y: 125, value: '₸ 47,800', date: '3 дек' },
        { x: 200, y: 95, value: '₸ 51,200', date: '4 дек' },
        { x: 250, y: 105, value: '₸ 49,800', date: '5 дек' },
        { x: 300, y: 80, value: '₸ 52,500', date: '6 дек' },
        { x: 350, y: 70, value: '₸ 55,000', date: 'Сегодня' }
      ],
      '30D': [
        { x: 50, y: 110, value: '₸ 48,500', date: '25 окт' },
        { x: 100, y: 125, value: '₸ 47,200', date: '26 окт' },
        { x: 150, y: 95, value: '₸ 51,800', date: '27 окт' },
        { x: 200, y: 105, value: '₸ 49,900', date: '28 окт' },
        { x: 250, y: 80, value: '₸ 53,400', date: '29 окт' },
        { x: 300, y: 90, value: '₸ 52,100', date: '30 окт' },
        { x: 350, y: 70, value: '₸ 55,000', date: 'Сегодня' }
      ],
      '3M': [
        { x: 50, y: 140, value: '₸ 45,000', date: 'сен' },
        { x: 100, y: 130, value: '₸ 46,500', date: 'сен' },
        { x: 150, y: 115, value: '₸ 48,200', date: 'окт' },
        { x: 200, y: 100, value: '₸ 50,800', date: 'окт' },
        { x: 250, y: 85, value: '₸ 52,900', date: 'ноя' },
        { x: 300, y: 75, value: '₸ 54,200', date: 'ноя' },
        { x: 350, y: 70, value: '₸ 55,000', date: 'Сегодня' }
      ]
    };
    return data[period] || data['30D'];
  };

  const chartData = getChartData(chartPeriod);
  const chartPath = chartData.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  const chartAreaPath = `${chartPath} L 400 200 L 0 200 Z`;

  // Mock chatbot responses based on user input
  const getMockResponse = (input) => {
    const lowerInput = input.toLowerCase().trim();
    
    if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('привет')) {
      return "Hello 👋 Welcome to NovaWallet!\nHow can I help you today?";
    }
    
    if (lowerInput.includes('what can you do') || lowerInput.includes('что ты умеешь') || lowerInput.includes('help')) {
      return "I can help you check your balance, send or receive crypto, show current exchange rates, and guide you through transactions securely. 🔒";
    }
    
    if (lowerInput.includes('bitcoin balance') || lowerInput.includes('btc balance') || lowerInput.includes('биткоин баланс')) {
      return "Your BTC balance is 0.2457 BTC, which is around $15,600 USD at the current rate. 💰";
    }
    
    if (lowerInput.includes('ethereum') || lowerInput.includes('eth') || lowerInput.includes('send') || lowerInput.includes('отправить')) {
      return "Sure! Please enter the recipient's wallet address and the amount you want to send.\n(Example: 0x12f...8E9C, 0.5 ETH)";
    }
    
    if (lowerInput.includes('done') || lowerInput.includes('готово') || lowerInput.includes('ok')) {
      return "Great ✅ Transaction created!\nConfirm to send 0.5 ETH — the estimated fee is 0.0012 ETH.\nDo you want to proceed?";
    }
    
    if (lowerInput.includes('balance') || lowerInput.includes('баланс')) {
      return "Your current balances:\n• KZTE: ₸ 50,000\n• BTC: 0.2457 BTC (~$15,600)\n• ETH: 1.8432 ETH (~$4,200)\n• USDT: 2,150 USDT 💰";
    }
    
    if (lowerInput.includes('fee') || lowerInput.includes('комиссия')) {
      return "Network fees vary by blockchain:\n• Ethereum: ~0.001-0.005 ETH\n• Bitcoin: ~10-50 sats/byte\n• KZTE: ~₸ 15-30\nFees depend on network congestion. 📊";
    }
    
    // Default response
    return "I'm here to help with your crypto wallet needs! You can ask me about:\n• Account balances 💰\n• Sending/receiving crypto 📤📥\n• Transaction fees 💸\n• Exchange rates 📈\n\nWhat would you like to know?";
  };

  const askAI = async () => {
    if (!aiInput.trim()) return;
    
    setAiLoading(true);
    setAiError('');
    
    // Add user message to conversation
    const userMessage = { type: 'user', text: aiInput };
    setConversationHistory(prev => [...prev, userMessage]);
    
    // Simulate thinking delay
    setTimeout(() => {
      const response = getMockResponse(aiInput);
      const botMessage = { type: 'bot', text: response };
      
      setConversationHistory(prev => [...prev, botMessage]);
      setAiReply(response);
      setAiLoading(false);
      setAiInput(''); // Clear input after sending
    }, 800 + Math.random() * 1200); // Random delay between 0.8-2s
  };

  const clearConversation = () => {
    setConversationHistory([]);
    setAiReply('');
    setAiError('');
    setAiInput('');
  };

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    setShowTransactionDetail(true);
  };

  const [toast, setToast] = useState('');
  const [balanceAnimation, setBalanceAnimation] = useState('');
  const [depositError, setDepositError] = useState('');
  const [withdrawError, setWithdrawError] = useState('');

  useEffect(() => {
    const s1 = setTimeout(() => setToast(t('connected')), 600);
    const s2 = setTimeout(() => setToast(''), 3000);
    return () => { clearTimeout(s1); clearTimeout(s2); };
  }, []);

  const [balanceKZTE, setBalanceKZTE] = useState(50000);
  const [history, setHistory] = useState([
    { type: 'send', label: 'Sent to 0xA1...F3', amount: -5000, date: 'Oct 10' },
    { type: 'recv', label: 'Received from Kaspi Bridge', amount: 12000, date: 'Oct 9' },
    { type: 'swap', label: 'Swapped to USDT', amount: -8000, date: 'Oct 8' },
  ]);
  const locale = language === 'RU' ? 'ru-RU' : language === 'KZ' ? 'kk-KZ' : 'en-US';
  const dateStr = () => new Date().toLocaleDateString(locale, { month: 'short', day: 'numeric' });
  const pushHistory = (item) => setHistory(h => [{...item, date: dateStr()}, ...h]);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [pendingTx, setPendingTx] = useState(null);

  const handleAddFunds = () => {
    setDepositAmount('');
    setDepositError('');
    setShowDeposit(true);
  };
  const handleWithdraw = () => {
    setWithdrawAmount('');
    setWithdrawError('');
    setShowWithdraw(true);
  };

  const handleConfirmTransfer = ({ target, amount, fee }) => {
    setPendingTx({ kind: 'transfer', payload: { target, amount: Number(amount || 0), fee } });
  };
  const handleOldSwap = () => {
    const payload = Array.from(arguments)[0] || {};
    setPendingTx({ kind: 'swap', payload });
  };

  const confirmDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (amount < 100) {
      setDepositError('Минимальная сумма депозита: ₸ 100');
      return;
    }
    
    // Анимация увеличения баланса
    setBalanceAnimation('increase');
    setTimeout(() => setBalanceAnimation(''), 1000);
    
    setBalanceKZTE(prev => prev + amount);
    setHistory(prev => [{
      type: 'recv',
      label: 'Received from Kaspi Bridge',
      amount: amount,
      date: new Date().toLocaleDateString('ru-RU')
    }, ...prev]);
    setShowDeposit(false);
    setToast('Депозит успешно выполнен');
    setTimeout(() => setToast(''), 3000);
  };

  const confirmWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount < 500) {
      setWithdrawError('Минимальная сумма вывода: ₸ 500');
      return;
    }
    if (amount > balanceKZTE) {
      setWithdrawError('Недостаточно средств на балансе');
      return;
    }
    
    // Анимация уменьшения баланса
    setBalanceAnimation('decrease');
    setTimeout(() => setBalanceAnimation(''), 1000);
    
    setBalanceKZTE(prev => prev - amount);
    setHistory(prev => [{
      type: 'send',
      label: 'Sent to 0xA1...F3',
      amount: -amount,
      date: new Date().toLocaleDateString('ru-RU')
    }, ...prev]);
    setShowWithdraw(false);
    setToast('Вывод средств отправлен');
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div className="app-shell">
      <Header chain={chain} setChain={setChain} onOpenAI={() => setShowAI(true)} t={t} />
      {tab === 'dashboard' && (
        <Dashboard chain={chain} balanceKZTE={balanceKZTE} onAddFunds={handleAddFunds} onWithdraw={handleWithdraw} onStartTransfer={() => setTab('transfer')} t={t} history={history} onTransactionClick={handleTransactionClick} setShowChartModal={setShowChartModal} />
      )}
      {tab === 'transfer' && (
        <Transfer onConfirm={handleConfirmTransfer} t={t} />
      )}
      {tab === 'swap' && (
        <Swap 
          swapFromToken={swapFromToken}
          setSwapFromToken={setSwapFromToken}
          swapToToken={swapToToken}
          setSwapToToken={setSwapToToken}
          swapAmount={swapAmount}
          setSwapAmount={handleSwapAmountChange}
          swapReceiveAmount={swapReceiveAmount}
          swapRate={swapRate}
          swapError={swapError}
          swapLoading={swapLoading}
          rateLoading={rateLoading}
          balances={balances}
          handleSwap={handleSwap}
          handleSwapDirection={handleSwapDirection}
          getSwapButtonText={getSwapButtonText}
          isSwapButtonEnabled={isSwapButtonEnabled}
          t={t}
        />
      )}
      {tab === 'history' && (
        <History items={history} t={t} onTransactionClick={handleTransactionClick} />
      )}
      {tab === 'profile' && (
        <Profile language={language} setLanguage={setLanguage} t={t} />
      )}
      <BottomNav current={tab} onChange={setTab} t={t} />

      {showAI && (
        <Modal title={t('aiAssistant')} onClose={() => setShowAI(false)}>
          <div className="subtitle">{t('aiAsk')}</div>
          <div className="spacer-12" />
          <input className="input" placeholder={t('askPlaceholder')} value={aiInput} onChange={e => setAiInput(e.target.value)} />
          <div className="spacer-12" />
          <div className="grid two-col">
            <button className="btn" onClick={() => setAiInput('')}>{t('clear')}</button>
            <button className="btn primary" onClick={askAI} disabled={aiLoading}>{aiLoading ? t('thinking') : t('send')}</button>
          </div>
          <div className="spacer-12" />
          {(aiError || aiReply) && (
            <div className="card" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="muted">{t('answer')}</div>
              <div className="spacer-8" />
              <div>{aiError || aiReply}</div>
            </div>
          )}
          <div className="spacer-12" />
          <div className="card" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="muted">{t('tip')}</div>
            <div className="spacer-8" />
            <div>
              {t('aiText', { chain })}
            </div>
          </div>
        </Modal>
      )}

      {!!toast && <div className="toast" onClick={() => setToast('')}>{toast}</div>}

      {showDeposit && (
        <Modal title={t('deposit')} onClose={() => setShowDeposit(false)}>
          <div className="subtitle">Пополнение кошелька через Kaspi Bridge</div>
          <div className="spacer-12" />
          <input 
            className="input" 
            type="number"
            placeholder={t('amount')} 
            value={depositAmount} 
            onChange={e => setDepositAmount(e.target.value)}
            min="1"
          />
          <div className="spacer-8" />
          <div className="muted">Минимальная сумма: ₸ 100</div>
          <div className="spacer-12" />
          <div className="grid two-col">
            <button className="btn" onClick={() => {
              setShowDeposit(false);
              setDepositAmount('');
            }}>{t('cancel')}</button>
            <button 
              className="btn primary" 
              disabled={!depositAmount || Number(depositAmount) <= 0 || Number(depositAmount) < 100}
              onClick={() => {
                const amt = Number(depositAmount || 0);
                if (amt <= 0 || amt < 100) {
                  setToast('Сумма должна быть больше ₸ 100');
                  return;
                }
                
                // Simulate API call
                setTimeout(() => {
                  setBalanceKZTE(b => b + amt);
                  pushHistory({ type: 'recv', label: 'Received from Kaspi Bridge', amount: amt });
                  setToast('Deposit successful');
                }, 500);
                
                setShowDeposit(false);
                setDepositAmount('');
              }}
            >
              {t('confirm')}
            </button>
          </div>
        </Modal>
      )}

      {showWithdraw && (
        <Modal title={t('withdrawAction')} onClose={() => setShowWithdraw(false)}>
          <div className="subtitle">Вывод средств на банковскую карту</div>
          <div className="spacer-12" />
          <input 
            className="input" 
            type="number"
            placeholder={t('amount')} 
            value={withdrawAmount} 
            onChange={e => setWithdrawAmount(e.target.value)}
            min="1"
            max={balanceKZTE}
          />
          <div className="spacer-8" />
          <div className="muted">Доступно: ₸ {balanceKZTE.toLocaleString('en-US')}</div>
          <div className="spacer-8" />
          <div className="muted">Минимальная сумма: ₸ 500</div>
          <div className="spacer-12" />
          <div className="grid two-col">
            <button className="btn" onClick={() => {
              setShowWithdraw(false);
              setWithdrawAmount('');
            }}>{t('cancel')}</button>
            <button 
              className="btn primary" 
              disabled={!withdrawAmount || Number(withdrawAmount) <= 0 || Number(withdrawAmount) > balanceKZTE || Number(withdrawAmount) < 500}
              onClick={() => {
                const amt = Number(withdrawAmount || 0);
                if (amt <= 0) {
                  setToast('Введите корректную сумму');
                  return;
                }
                if (amt > balanceKZTE) {
                  setToast('Insufficient balance');
                  return;
                }
                if (amt < 500) {
                  setToast('Минимальная сумма вывода ₸ 500');
                  return;
                }
                
                // Simulate API call
                setTimeout(() => {
                  setBalanceKZTE(b => Math.max(0, b - amt));
                  pushHistory({ type: 'send', label: 'Sent to 0xA1...F3', amount: -amt });
                  setToast('Withdrawal sent');
                }, 500);
                
                setShowWithdraw(false);
                setWithdrawAmount('');
              }}
            >
              {t('confirm')}
            </button>
          </div>
        </Modal>
      )}

      {pendingTx?.kind === 'transfer' && (
        <Modal title={t('confirmTransfer')} onClose={() => setPendingTx(null)}>
          <div className="list">
            <div className="list-item"><div className="left"><div>{t('amount')}</div></div><div>₸ {pendingTx.payload.amount}</div></div>
            <div className="list-item"><div className="left"><div>To</div></div><div>{pendingTx.payload.target || '—'}</div></div>
            <div className="list-item"><div className="left"><div>Fee</div></div><div>₸ {pendingTx.payload.fee}</div></div>
          </div>
          <div className="spacer-12" />
          <div className="grid two-col">
            <button className="btn" onClick={() => setPendingTx(null)}>{t('cancel')}</button>
            <button className="btn primary" onClick={() => {
              const amt = pendingTx.payload.amount + (pendingTx.payload.fee || 0);
              setBalanceKZTE(b => Math.max(0, b - amt));
              const short = (pendingTx.payload.target || '').slice(0, 6) + '...' + (pendingTx.payload.target || '').slice(-2);
              pushHistory({ type: 'send', label: `Sent to ${short}`, amount: -amt });
              setToast(t('txConfirmed'));
              setPendingTx(null);
            }}>{t('confirm')}</button>
          </div>
        </Modal>
      )}

      {pendingTx?.kind === 'swap' && (
        <Modal title={t('doSwap')} onClose={() => setPendingTx(null)}>
          <div className="list">
            <div className="list-item"><div className="left"><div>{t('amount')}</div></div><div>₸ {Number(pendingTx.payload.amount || 0)}</div></div>
            <div className="list-item"><div className="left"><div>{t('to')}</div></div><div>{pendingTx.payload.toAsset}</div></div>
            <div className="list-item"><div className="left"><div>{t('youReceive')}</div></div><div>{pendingTx.payload.preview}</div></div>
          </div>
          <div className="spacer-12" />
          <div className="grid two-col">
            <button className="btn" onClick={() => setPendingTx(null)}>{t('cancel')}</button>
            <button className="btn primary" onClick={() => {
              const amt = Number(pendingTx.payload.amount || 0);
              setBalanceKZTE(b => Math.max(0, b - amt));
              pushHistory({ type: 'swap', label: `Swapped to ${pendingTx.payload.toAsset}`, amount: -amt });
              setToast(t('swapExecuted'));
              setPendingTx(null);
            }}>{t('confirm')}</button>
          </div>
        </Modal>
      )}

      {showTransactionDetail && selectedTransaction && (
        <Modal title={t('transactionDetails')} onClose={() => setShowTransactionDetail(false)}>
          <div className="list">
            <div className="list-item">
              <div className="left">
                <div className={`icon-circle ${selectedTransaction.type === 'send' ? 'icon-send' : selectedTransaction.type === 'recv' ? 'icon-recv' : 'icon-swap'}`}>
                  <Icon name={selectedTransaction.type === 'send' ? 'send' : selectedTransaction.type === 'recv' ? 'receive' : 'swap'} />
                </div>
                <div>
                  <div className="title">{selectedTransaction.label}</div>
                  <div className="subtitle">
                    {selectedTransaction.type === 'send' ? t('operationTypeSend') : 
                     selectedTransaction.type === 'recv' ? t('operationTypeReceive') : t('operationTypeSwap')}
                  </div>
                </div>
              </div>
              <div style={{ color: selectedTransaction.amount > 0 ? '#4ade80' : '#f87171', fontSize: '18px', fontWeight: 'bold' }}>
                {selectedTransaction.amount > 0 ? '+' : ''}₸ {Math.abs(selectedTransaction.amount).toLocaleString('en-US')}
              </div>
            </div>
          </div>
          <div className="spacer-12" />
          <div className="card" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="list">
              <div className="list-item">
                <div className="left"><div>{t('operationType')}</div></div>
                <div>{selectedTransaction.type === 'send' ? t('operationTypeSend') : 
                     selectedTransaction.type === 'recv' ? t('operationTypeReceive') : t('operationTypeSwap')}</div>
              </div>
              <div className="list-item">
                <div className="left"><div>{t('transactionAmount')}</div></div>
                <div>₸ {Math.abs(selectedTransaction.amount).toLocaleString('en-US')}</div>
              </div>
              <div className="list-item">
                <div className="left"><div>{t('usdEquivalent')}</div></div>
                <div>$ {(Math.abs(selectedTransaction.amount) / 500).toFixed(2)}</div>
              </div>
              {selectedTransaction.type === 'send' && (
                <div className="list-item">
                  <div className="left"><div>{t('recipientAddress')}</div></div>
                  <div>0xA1...F3</div>
                </div>
              )}
              {selectedTransaction.type === 'recv' && (
                <div className="list-item">
                  <div className="left"><div>{t('source')}</div></div>
                  <div>Kaspi Bridge</div>
                </div>
              )}
              {selectedTransaction.type === 'swap' && (
                <div className="list-item">
                  <div className="left"><div>{t('swapPair')}</div></div>
                  <div>KZT/USDT</div>
                </div>
              )}
              <div className="list-item">
                <div className="left"><div>{t('transactionTime')}</div></div>
                <div>{selectedTransaction.date} · 14:32</div>
              </div>
              <div className="list-item">
                <div className="left"><div>{t('transactionStatus')}</div></div>
                <div><span className="kzte-badge">{t('statusCompleted')}</span></div>
              </div>
            </div>
          </div>
          <div className="spacer-12" />
          <div className="grid two-col">
            {selectedTransaction.type === 'send' && (
              <>
                <button className="btn outline" onClick={() => {
                  navigator.clipboard.writeText('0xA1B2C3D4E5F6789012345678901234567890ABCD');
                  setToast(t('addressCopied'));
                }}>{t('copyAddress')}</button>
                <button className="btn outline" onClick={() => {
                  window.open('https://etherscan.io/tx/0x123...', '_blank');
                }}>{t('viewInExplorer')}</button>
              </>
            )}
            {selectedTransaction.type === 'recv' && (
              <>
                <button className="btn outline" onClick={() => {
                  setShowShareModal(true);
                }}>{t('share')}</button>
                <button className="btn primary" onClick={() => {
                  setShowTransactionDetail(false);
                  setShowDeposit(true);
                }}>{t('repeatTransaction')}</button>
              </>
            )}
            {selectedTransaction.type === 'swap' && (
              <>
                <button className="btn outline" onClick={() => {
                  setToast(t('featureInDevelopment'));
                }}>{t('share')}</button>
                <button className="btn primary" onClick={() => {
                  setShowTransactionDetail(false);
                  setTab('swap');
                }}>{t('repeatTransaction')}</button>
              </>
            )}
          </div>
        </Modal>
      )}

      {showChartModal && (
        <Modal title={t('detailedChart')} onClose={() => setShowChartModal(false)}>
          <div className="chart-container">
            <div className="chart-header">
              <div className="chart-balance">
                <div className="title">₸ {balanceKZTE.toLocaleString('en-US')}</div>
                <div className="subtitle" style={{ color: '#4ade80' }}>+2.4% {t('dailyChange')}</div>
              </div>
              <div className="chart-period">
                <button 
                  className={`btn ${chartPeriod === '7D' ? 'primary' : 'outline'}`} 
                  style={{ fontSize: '12px', padding: '6px 12px' }}
                  onClick={() => setChartPeriod('7D')}
                >{t('period7d')}</button>
                <button 
                  className={`btn ${chartPeriod === '30D' ? 'primary' : 'outline'}`} 
                  style={{ fontSize: '12px', padding: '6px 12px' }}
                  onClick={() => setChartPeriod('30D')}
                >{t('period30d')}</button>
                <button 
                  className={`btn ${chartPeriod === '3M' ? 'primary' : 'outline'}`} 
                  style={{ fontSize: '12px', padding: '6px 12px' }}
                  onClick={() => setChartPeriod('3M')}
                >{t('period3m')}</button>
              </div>
            </div>
            <div className="spacer-12" />
            
            {/* Интерактивный график */}
            <div className="interactive-chart" style={{ 
              height: '200px', 
              background: 'linear-gradient(180deg, rgba(139,92,246,0.1), rgba(139,92,246,0.02))',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <svg width="100%" height="100%" viewBox="0 0 400 200" style={{ position: 'absolute', top: 0, left: 0 }}>
                {/* Сетка */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Градиент под линией */}
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(139,92,246,0.3)" />
                    <stop offset="100%" stopColor="rgba(139,92,246,0.05)" />
                  </linearGradient>
                </defs>
                
                {/* Область под графиком */}
                <path d={chartAreaPath} 
                      fill="url(#chartGradient)" />
                
                {/* Основная линия графика */}
                <path d={chartPath} 
                      fill="none" 
                      stroke="#8b5cf6" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      key={chartPeriod}>
                  <animate attributeName="stroke-dasharray" 
                           values="0,1000;1000,0" 
                           dur="1.5s" 
                           fill="freeze" />
                </path>
                
                {/* Точки на графике */}
                {chartData.map((point, i) => (
                  <g key={i}>
                    <circle cx={point.x} cy={point.y} r="4" fill="#8b5cf6" stroke="#fff" strokeWidth="2">
                      <animate attributeName="r" values="0;4" dur="0.5s" begin={`${i * 0.2}s`} fill="freeze" />
                    </circle>
                    <circle cx={point.x} cy={point.y} r="8" fill="rgba(139,92,246,0.2)" className="chart-point-hover">
                      <animate attributeName="opacity" values="0;1" dur="0.3s" begin={`${i * 0.2 + 0.5}s`} fill="freeze" />
                    </circle>
                  </g>
                ))}
              </svg>
              
              {/* Tooltip */}
              <div className="chart-tooltip" style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.8)',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#fff',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ color: '#8b5cf6', fontWeight: '600' }}>₸ 55,000</div>
                <div style={{ color: '#888' }}>{t('today')}, 14:32</div>
              </div>
            </div>
            
            <div className="spacer-12" />
            
            {/* Статистика */}
            <div className="chart-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <div className="stat-card" style={{ 
                background: 'rgba(34,197,94,0.1)', 
                padding: '12px', 
                borderRadius: '8px',
                border: '1px solid rgba(34,197,94,0.2)'
              }}>
                <div style={{ fontSize: '12px', color: '#888' }}>{t('income')}</div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#22c55e' }}>+₸ 8,500</div>
              </div>
              <div className="stat-card" style={{ 
                background: 'rgba(239,68,68,0.1)', 
                padding: '12px', 
                borderRadius: '8px',
                border: '1px solid rgba(239,68,68,0.2)'
              }}>
                <div style={{ fontSize: '12px', color: '#888' }}>{t('expenses')}</div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#ef4444' }}>-₸ 3,200</div>
              </div>
              <div className="stat-card" style={{ 
                background: 'rgba(139,92,246,0.1)', 
                padding: '12px', 
                borderRadius: '8px',
                border: '1px solid rgba(139,92,246,0.2)'
              }}>
                <div style={{ fontSize: '12px', color: '#888' }}>{t('swaps')}</div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#8b5cf6' }}>₸ 12,000</div>
              </div>
            </div>
            
            <div className="spacer-12" />
            
            {/* Последние транзакции в графике */}
            <div className="chart-transactions">
              <div className="subtitle" style={{ marginBottom: '8px' }}>{t('recentOperations')}</div>
              <div className="list">
                {(history || []).slice(0, 3).map((tx, i) => (
                  <div key={i} className="list-item" style={{ padding: '8px 12px' }}>
                    <div className="left">
                      <div className={`icon-circle ${tx.type === 'send' ? 'icon-send' : tx.type === 'recv' ? 'icon-recv' : 'icon-swap'}`} style={{ width: '28px', height: '28px' }}>
                        <Icon name={tx.type === 'send' ? 'send' : tx.type === 'recv' ? 'receive' : 'swap'} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px' }}>{tx.label}</div>
                        <div style={{ fontSize: '12px', color: '#888' }}>{tx.date}</div>
                      </div>
                    </div>
                    <div style={{ 
                      color: tx.amount > 0 ? '#4ade80' : '#f87171', 
                      fontWeight: '600',
                      fontSize: '14px'
                    }}>
                      {tx.amount > 0 ? '+' : ''}₸ {Math.abs(tx.amount).toLocaleString('en-US')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <Modal title={t('shareTransaction')} onClose={() => setShowShareModal(false)}>
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ marginBottom: '20px', color: '#9ca3af', fontSize: '14px' }}>
              {t('shareTransaction') || 'Поделиться транзакцией'}
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <button 
                className="btn outline" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px',
                  padding: '16px 12px'
                }}
                onClick={() => {
                  setToast('Telegram share opened');
                  setShowShareModal(false);
                }}
              >
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  background: '#0088cc', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  T
                </div>
                <span style={{ fontSize: '12px' }}>Telegram</span>
              </button>
              
              <button 
                className="btn outline" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px',
                  padding: '16px 12px'
                }}
                onClick={() => {
                  setToast('WhatsApp share opened');
                  setShowShareModal(false);
                }}
              >
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  background: '#25d366', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  W
                </div>
                <span style={{ fontSize: '12px' }}>WhatsApp</span>
              </button>
              
              <button 
                className="btn outline" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '8px',
                  padding: '16px 12px'
                }}
                onClick={() => {
                  navigator.clipboard.writeText('Transaction link copied to clipboard');
                  setToast(t('addressCopied') || 'Ссылка скопирована');
                  setShowShareModal(false);
                }}
              >
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  background: '#6b7280', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  📋
                </div>
                <span style={{ fontSize: '12px' }}>{t('copyAddress') || 'Копировать'}</span>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default App
