// 导入react
import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";



// 导出抽离出去的组件
import App from "./App.js";

// 引入css文件
import './index.css'

const mydome = document.getElementById('root')
const root = createRoot(mydome)
root.render(<App />)
