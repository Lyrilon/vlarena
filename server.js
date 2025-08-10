// server.js
// 这是一个简单的 Express 服务器，用于连接本地 MySQL 并提供数据 API
// 已更新为 ES Module (import) 语法

import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3001; // 我们为后端选择 3001 端口，避免和前端冲突

// --- 中间件 ---
// 启用 CORS，允许任何来源的请求（在开发中很方便）
app.use(cors());
// 用于解析 JSON 请求体（如果以后需要 POST 请求）
app.use(express.json());

// --- 数据库连接配置 ---
// !!! 重要：请根据您自己的 MySQL 设置修改以下信息
const dbConfig = {
  host: 'localhost',      // 数据库主机名，通常是 localhost
  user: 'root',           // 您的 MySQL 用户名
  password: 'your_password', // 您的 MySQL 密码
  database: 'paper_atlas' // 您创建的数据库名称
};

// 创建数据库连接池
const pool = mysql.createPool(dbConfig);

// --- API 路由 ---
// 创建一个 GET 接口，用于获取所有论文数据
app.get('/api/papers', (req, res) => {
  const sql = "SELECT * FROM papers ORDER BY year DESC";

  pool.query(sql, (err, results) => {
    if (err) {
      console.error('数据库查询出错:', err);
      // 向前端返回一个 500 错误
      res.status(500).json({ error: '无法从数据库获取数据' });
      return;
    }
    
    // MySQL 返回的数据中，JSON 字段是字符串，我们需要将其解析为真正的数组
    const papers = results.map(paper => ({
        ...paper,
        authors: paper.authors ? JSON.parse(paper.authors) : [],
        tags: paper.tags ? JSON.parse(paper.tags) : []
    }));

    // 成功，将查询结果以 JSON 格式返回给前端
    res.json(papers);
  });
});

// --- 启动服务器 ---
app.listen(port, () => {
  console.log(`后端服务器已启动，正在监听 http://localhost:${port}`);
  console.log('请确保您的 MySQL 服务正在运行，并且数据库配置正确。');
});
