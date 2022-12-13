import React, { Suspense,lazy } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Button } from 'antd'
// import About from './page/About'
// import Home from './page/Home'
const Home = lazy(() => import(/* webpackChunkName:'home' */ './page/Home'))
const About = lazy(() => import(/* webpackChunkName:'about' */ './page/About'))

function App() {
  return (
    <div>
      <h1>App</h1>
      <Button type="primary">点击</Button>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
