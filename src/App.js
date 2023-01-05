import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import {
  Navbar,
  News,
  Cryptocurrencies,
  Cryptodetails,
  Homepage
} from './Components'

import { Layout, Space, Typography } from "antd"


function App() {
  return (
    <div className='app'>


      <nav className="navbar">
        <Navbar />
      </nav>

      <main className="main">
        <Layout>

          <div className="routes">
            <Routes>

              <Route path="/" element={<Homepage />} />

              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

              <Route path="/crypto/:coinId" element={<Cryptodetails />} />

              <Route path="/news" element={<News />} />

            </Routes>

          </div>
        </Layout>

        <footer className='footer'>
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            CryptoVerse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to={'/'}>Home</Link>
            <Link to={'/news'}>News</Link>
          </Space>
        </footer>
      </main>
    </div>
  );
}

export default App;
