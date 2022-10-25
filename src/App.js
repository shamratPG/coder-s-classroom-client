import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch('https://coders-classroom-server.vercel.app/blogs')
      .then(data => data.json())
      .then(result => {
        console.log(result);
        setCourse(result);
      })
      .catch(error => console.error(error))
  }, [])
  return (
    <div className="App">
      {course.length}

    </div>
  );
}

export default App;
