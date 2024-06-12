import './reset.css'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useState, useLayoutEffect } from 'react';

function App() {
  // 한 글자 씩 단어 출력
  const completedWord = "Hi I'm Sion";
  const [word, setWord] = useState('');
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    const typingInterval = setInterval(() => {
      setWord((preWord) => {
        const result = preWord ? preWord + completedWord[count] : completedWord[0]
        setCount(count + 1)

        if (count >= completedWord.length) {
          setCount(count);
          setWord("Hi I'm Sion");
        }

        return result;
      })
    }, 300);
    return () => {
      clearInterval(typingInterval);
    }
  }, [count])

  return (
    <>
      <div className='home'>
        <div>{ word }</div>
        <div>Front-End Dev <br /> Protfolio</div>
      </div>
      <div>
        <Link to={"/"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
