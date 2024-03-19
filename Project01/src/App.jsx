import  { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const progressBarAndCountNumber = () => {
      const progress = document.querySelectorAll('.progress');
      let count = 0;
      let MAX = 80;

      let run = setInterval(() => {
        count++;
        progress.forEach(element => {
          if (count <= parseInt(element.dataset.progress)) {
            element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
            element.firstElementChild.textContent = `${count}%`
          }
          if (count === MAX) {
            clearInterval(run)
          }
        });
      }, 20);
    }

    progressBarAndCountNumber();

    return () => {
      clearInterval('run');
    };
  }, []);

  return ( 
    <>
<h1 className='tech'>Tech Stack</h1>
<br />
<br />
<br />
    <section>
      <div className="parent-skill">
        <div className="skill">
          <div className="progress" data-progress="80">
            <span className="progress-number">0%</span>
          </div>
        </div>
        <span className="title">HTML</span>
      </div>

      <div className="parent-skill">
        <div className="skill">
          <div className="progress" data-progress="65">
            <span className="progress-number">0%</span>
          </div>
        </div>
        <span className="title">CSS</span>
      </div>

      <div className="parent-skill">
        <div className="skill">
          <div className="progress" data-progress="75">
            <span className="progress-number">0%</span>
          </div>
        </div>
        <span className="title">Python</span>
      </div>

      <div className="parent-skill">
        <div className="skill">
          <div className="progress" data-progress="65">
            <span className="progress-number">0%</span>
          </div>
        </div>
        <span className="title">Numpy</span>
      </div>

      <div className="parent-skill">
        <div className="skill">
          <div className="progress" data-progress="70">
            <span className="progress-number">0%</span>
          </div>
        </div>
        <span className="title">Pandas</span>
      </div>

      <div className="parent-skill">
        <div className="skill">
          <div className="progress" data-progress="65">
            <span className="progress-number">0%</span>
          </div>
        </div>
        <span className="title">UI Design</span>
      </div>

      <div className="parent-skill">
        <div className="skill">
          <div className="progress" data-progress="50">
            <span className="progress-number">0%</span>
          </div>
        </div>
        <span className="title">JavaScript</span>
      </div>
    </section>
    </>
  );
};

export default App;