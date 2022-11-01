import MyCounter from './components/MyCounter';
import MyGitHub from './components/MyGitHub';


function App() {
  return (
   

    <div>
      <h1>
        Hello React!
      </h1>
      <h2>
        Pia Ritter - q12m368
      </h2>
      <hr/>

     < MyCounter incBy={1} decBy={2}/>
     <hr/>
     < MyCounter incBy={3} decBy={4}/>
     <hr/>
     <MyGitHub/>
    </div>
  );
}

export default App;
