# 💱 Currency Converter

A modern, responsive currency converter built with React and Vite. Convert between different currencies with real-time exchange rates and a beautiful, intuitive interface.

![Currency Converter Screenshot](./public/screenshot.png)

## ✨ Features

- 🔄 **Real-time Currency Conversion** - Get up-to-date exchange rates
- 🔀 **Swap Functionality** - Quickly swap between currencies
- 💫 **Beautiful UI** - Modern design with backdrop blur effects
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎨 **Tailwind CSS** - Styled with utility-first CSS framework



## 🛠️ Built With

- **React 19** - Modern React with latest features
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Currency API** - Real-time exchange rates from fawazahmed0

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RomanAliSher/Currency-Converter.git
   cd Currency-Converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 📁 Project Structure

```
currency-projecct/
├── public/
│   ├── vite.svg
│   └── screenshot.png
├── src/
│   ├── App.jsx              # Main application component
│   ├── components.jsx       # InputBox component
│   ├── usecurrencyinfo.js   # Custom hook for currency data
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 How It Works

1. **Select Source Currency** - Choose the currency you want to convert from
2. **Enter Amount** - Input the amount you want to convert
3. **Select Target Currency** - Choose the currency you want to convert to
4. **Convert** - Click the convert button to see the result
5. **Swap** - Use the swap button to quickly reverse the conversion

## 🔗 API Integration

This project uses the free currency API from [@fawazahmed0](https://github.com/fawazahmed0/currency-api):
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in the Tailwind configuration
- Background image in `App.jsx`
- Component layouts in the respective files

### Adding New Features
- Add currency favorites
- Implement conversion history
- Add currency trend charts
- Include more currency information

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- [Fawaz Ahmed](https://github.com/fawazahmed0) for the free currency API
- [Pexels](https://pexels.com) for the beautiful background image
- React team for the amazing framework
- Vite team for the blazing fast build tool



⭐ Star this repo if you found it helpful!
