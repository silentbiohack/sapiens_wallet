# KZTE Wallet - Web3 Казахстанский Финтех Кошелек

![KZTE Wallet](https://img.shields.io/badge/KZTE-Wallet-blue) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-6.0.1-green)

**KZTE Wallet** - это современное веб-приложение для управления криптовалютными активами с фокусом на казахстанский рынок. Приложение поддерживает работу с токеном KZTE (Казахстанский Тенге) и другими популярными криптовалютами.

## 🌟 Основные возможности

### 📊 Dashboard (Главная панель)
- **Отображение баланса**: Показывает текущий баланс KZTE в тенге и долларовом эквиваленте
- **Дневные изменения**: Отслеживание изменений баланса за день (+1.2%)
- **Быстрые действия**: Кнопки для пополнения и вывода средств
- **Недавняя активность**: График активности с возможностью просмотра детального графика
- **Последние транзакции**: Отображение последних 3 транзакций с возможностью клика для подробностей
- **Мультисетевая поддержка**: Переключение между сетями Ethereum, TON, Polygon

### 💸 Transfer (Переводы)
- **Отправка KZTE**: Перевод токенов на другие кошельки
- **Два способа ввода адреса**:
  - Адрес кошелька или QR-код
  - Номер телефона
- **QR-сканер**: Встроенная функция сканирования QR-кодов
- **Расчет комиссии**: Автоматический расчет комиссии (₸15 - быстро)
- **Подтверждение транзакции**: Детальный экран подтверждения перевода

### 🔄 Swap (Обмен)
- **Поддерживаемые токены**: KZTE, USDT, BTC, ETH
- **Реальные курсы**: Отображение актуальных курсов обмена
- **Автоматический расчет**: Расчет получаемой суммы в реальном времени
- **Смена направления**: Быстрая смена токенов местами
- **Показ баланса**: Отображение доступного баланса для каждого токена
- **Кнопка MAX**: Быстрый выбор максимальной суммы
- **Комиссия сети**: Отображение комиссии за транзакцию

### 📈 History (История)
- **Фильтрация транзакций**: По типу (все, отправка, получение, обмен)
- **Фильтр по дате**: Выбор периода (сегодня, 7 дней, 30 дней)
- **Детали транзакций**: Подробная информация о каждой операции
- **Типы операций**:
  - Отправка (send)
  - Получение (receive)
  - Обмен (swap)
- **Цветовая индикация**: Зеленый для поступлений, красный для списаний

### 👤 Profile (Профиль)
- **Настройки профиля**: Управление личными данными
- **KYC статус**: Отображение статуса верификации (Подтвержден)
- **Резервное копирование**: Управление seed-фразой и социальным восстановлением
- **Языковые настройки**: Поддержка 3 языков (Английский, Русский, Казахский)
- **Смена языка**: Мгновенное переключение интерфейса

### 🤖 AI Assistant (ИИ Помощник)
- **Интеллектуальная поддержка**: Ответы на вопросы о комиссиях и операциях
- **Контекстные советы**: Информация о комиссиях в различных сетях
- **Интерактивный чат**: Возможность задавать вопросы и получать ответы
- **Многоязычность**: Поддержка всех языков интерфейса

## 🔧 Дополнительные функции

### 📱 Модальные окна
- **Детали транзакций**: Подробная информация с возможностью:
  - Копирования адреса
  - Просмотра в блокчейн-эксплорере
  - Повторения транзакции
  - Поделиться транзакцией
- **Пополнение/Вывод**: Модальные окна для операций с балансом
- **Графики**: Детальные графики доходов, расходов и обменов

### 🌐 Интернационализация
Полная поддержка трех языков:
- **Английский (EN)**: Международный интерфейс
- **Русский (RU)**: Для русскоязычных пользователей
- **Казахский (KZ)**: Для казахстанского рынка

### 🎨 Современный UI/UX
- **Темная тема**: Современный темный интерфейс
- **Адаптивный дизайн**: Оптимизация для мобильных устройств
- **Анимации**: Плавные переходы и анимации
- **Иконки**: Встроенные SVG иконки для всех элементов
- **Уведомления**: Toast-уведомления для обратной связи

## 🚀 Технологический стек

- **Frontend**: React 18.3.1
- **Сборщик**: Vite 6.0.1
- **Стилизация**: CSS с кастомными переменными
- **Иконки**: Встроенные SVG компоненты
- **Интернационализация**: Собственная система i18n
- **Состояние**: React Hooks (useState, useEffect, useMemo)

## 📦 Установка и запуск

### Предварительные требования
- Node.js (версия 16 или выше)
- npm или yarn

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm run dev
```
Приложение будет доступно по адресу: `http://localhost:5173`

### Сборка для продакшена
```bash
npm run build
```

### Предварительный просмотр продакшен сборки
```bash
npm run preview
```

### Линтинг кода
```bash
npm run lint
```

## 📁 Структура проекта

```
wallet/
├── public/
│   └── vite.svg                 # Иконка приложения
├── src/
│   ├── App.jsx                  # Основной компонент приложения
│   ├── App.css                  # Стили приложения (не используется)
│   ├── index.css                # Основные стили
│   ├── main.jsx                 # Точка входа React
│   └── assets/                  # Статические ресурсы
├── index.html                   # HTML шаблон
├── package.json                 # Зависимости и скрипты
├── vite.config.js              # Конфигурация Vite
├── eslint.config.js            # Конфигурация ESLint
└── README.md                   # Документация проекта
```

## 🎯 Основные компоненты

### App.jsx
Главный компонент, содержащий:
- Систему маршрутизации между вкладками
- Управление состоянием приложения
- Все основные компоненты (Dashboard, Transfer, Swap, History, Profile)
- Модальные окна и уведомления
- Систему интернационализации

### Компоненты интерфейса
- **Header**: Шапка с брендингом и переключателем сети
- **BottomNav**: Нижняя навигация между разделами
- **Modal**: Универсальный компонент модальных окон
- **Icon**: Система SVG иконок

## 🔐 Безопасность

- Все операции выполняются в демо-режиме
- Нет реальных подключений к блокчейну
- Безопасное хранение состояния в памяти браузера
- Валидация всех пользовательских вводов

## 🌍 Поддерживаемые сети

- **Ethereum**: Основная сеть Ethereum
- **TON**: The Open Network
- **Polygon**: Сеть Polygon (Matic)

## 💰 Поддерживаемые токены

- **KZTE**: Основной токен (Казахстанский Тенге)
- **USDT**: Tether USD
- **BTC**: Bitcoin
- **ETH**: Ethereum

## 📊 Демо данные

Приложение использует демо-данные для демонстрации функциональности:
- Начальный баланс: ₸50,000 KZTE
- Курс USD: 1 USD ≈ 500 ₸
- Демо-транзакции в истории
- Мок-курсы для обмена

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Зафиксируйте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

---


---

# KZTE Wallet - Web3 Kazakhstani Fintech Wallet

![KZTE Wallet](https://img.shields.io/badge/KZTE-Wallet-blue) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-6.0.1-green)

**KZTE Wallet** is a modern web application for managing cryptocurrency assets with a focus on the Kazakhstani market. The application supports working with the KZTE token (Kazakhstani Tenge) and other popular cryptocurrencies.

## 🌟 Key Features

### 📊 Dashboard (Main Panel)
- **Balance Display**: Shows current KZTE balance in tenge and dollar equivalent
- **Daily Changes**: Tracking balance changes for the day (+1.2%)
- **Quick Actions**: Buttons for deposit and withdrawal
- **Recent Activity**: Activity chart with detailed chart viewing capability
- **Latest Transactions**: Display of the last 3 transactions with click for details
- **Multi-network Support**: Switching between Ethereum, TON, Polygon networks

### 💸 Transfer (Transfers)
- **Send KZTE**: Transfer tokens to other wallets
- **Two address input methods**:
  - Wallet address or QR code
  - Phone number
- **QR Scanner**: Built-in QR code scanning function
- **Fee Calculation**: Automatic fee calculation (₸15 - fast)
- **Transaction Confirmation**: Detailed transfer confirmation screen

### 🔄 Swap (Exchange)
- **Supported Tokens**: KZTE, USDT, BTC, ETH
- **Real Rates**: Display of current exchange rates
- **Automatic Calculation**: Real-time calculation of received amount
- **Direction Change**: Quick token swap
- **Balance Display**: Show available balance for each token
- **MAX Button**: Quick selection of maximum amount
- **Network Fee**: Display of transaction fee

### 📈 History (History)
- **Transaction Filtering**: By type (all, send, receive, swap)
- **Date Filter**: Period selection (today, 7 days, 30 days)
- **Transaction Details**: Detailed information about each operation
- **Operation Types**:
  - Send (send)
  - Receive (receive)
  - Swap (swap)
- **Color Indication**: Green for incoming, red for outgoing

### 👤 Profile (Profile)
- **Profile Settings**: Personal data management
- **KYC Status**: Verification status display (Verified)
- **Backup**: Seed phrase and social recovery management
- **Language Settings**: Support for 3 languages (English, Russian, Kazakh)
- **Language Change**: Instant interface switching

### 🤖 AI Assistant (AI Assistant)
- **Intelligent Support**: Answers to questions about fees and operations
- **Contextual Tips**: Information about fees in various networks
- **Interactive Chat**: Ability to ask questions and get answers
- **Multilingual**: Support for all interface languages

## 🔧 Additional Features

### 📱 Modal Windows
- **Transaction Details**: Detailed information with ability to:
  - Copy address
  - View in blockchain explorer
  - Repeat transaction
  - Share transaction
- **Deposit/Withdrawal**: Modal windows for balance operations
- **Charts**: Detailed charts of income, expenses, and exchanges

### 🌐 Internationalization
Full support for three languages:
- **English (EN)**: International interface
- **Russian (RU)**: For Russian-speaking users
- **Kazakh (KZ)**: For the Kazakhstani market

### 🎨 Modern UI/UX
- **Dark Theme**: Modern dark interface
- **Responsive Design**: Mobile device optimization
- **Animations**: Smooth transitions and animations
- **Icons**: Built-in SVG icons for all elements
- **Notifications**: Toast notifications for feedback

## 🚀 Technology Stack

- **Frontend**: React 18.3.1
- **Bundler**: Vite 6.0.1
- **Styling**: CSS with custom variables
- **Icons**: Built-in SVG components
- **Internationalization**: Custom i18n system
- **State**: React Hooks (useState, useEffect, useMemo)

## 📦 Installation and Launch

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Run in Development Mode
```bash
npm run dev
```
The application will be available at: `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Code Linting
```bash
npm run lint
```

## 📁 Project Structure

```
wallet/
├── public/
│   └── vite.svg                 # Application icon
├── src/
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Application styles (not used)
│   ├── index.css                # Main styles
│   ├── main.jsx                 # React entry point
│   └── assets/                  # Static resources
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # Project documentation
```

## 🎯 Main Components

### App.jsx
Main component containing:
- Routing system between tabs
- Application state management
- All main components (Dashboard, Transfer, Swap, History, Profile)
- Modal windows and notifications
- Internationalization system

### Interface Components
- **Header**: Header with branding and network switcher
- **BottomNav**: Bottom navigation between sections
- **Modal**: Universal modal window component
- **Icon**: SVG icon system

## 🔐 Security

- All operations are performed in demo mode
- No real blockchain connections
- Safe state storage in browser memory
- Validation of all user inputs

## 🌍 Supported Networks

- **Ethereum**: Main Ethereum network
- **TON**: The Open Network
- **Polygon**: Polygon (Matic) network

## 💰 Supported Tokens

- **KZTE**: Main token (Kazakhstani Tenge)
- **USDT**: Tether USD
- **BTC**: Bitcoin
- **ETH**: Ethereum

## 📊 Demo Data

The application uses demo data to demonstrate functionality:
- Initial balance: ₸50,000 KZTE
- USD rate: 1 USD ≈ 500 ₸
- Demo transactions in history
- Mock rates for exchange

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for details.

---
