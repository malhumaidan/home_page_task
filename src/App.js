
import './App.css';
import './products'
import products from './products';

import CardList from './components/Card/List';
import Button from './components/Button';
import SecondryButton from './components/Button/Secondry';
import IsAuth from './components/IsAuth';
function App() {


  return (
    <>

      <Test />
      <div className="card-list">
        <CardList products={products} />
      </div>
      <Button name={"Click here"} />
      <IsAuth>
        <SecondryButton name={'click me'} />
      </IsAuth>

    </>

  );
}

function Test() {


  return (
    <div>
      <div className="div">
        <h1>Cookies and Beyound</h1>
      </div>
      <div className='div'>
        <h3>Where cookie maniacs gather</h3>
      </div>
      <div >
        <img style={{ width: '100%', height: 800 }} src='https://c8.alamy.com/comp/BARE9Y/millie-s-cookie-shop-york-yorkshire-uk-BARE9Y.jpg' alt=''></img>
      </div>
    </div>
  );
}




export default App;
