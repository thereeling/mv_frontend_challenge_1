import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators } from './state/index';

function App() {

  const bank = useSelector((state) => state.bank);
  const[depositValue, setDepositValue] = useState(0);
  const[withdrawValue, setWithdrawValue] = useState(0);
  const dispatch = useDispatch();

  const { depositBank, withdrawBank } = bindActionCreators(actionCreators, dispatch);

  const depositOnclickHandler = () =>{
    depositBank(depositValue)
  };
  const withdrawOnclickHandler = () =>{
    withdrawBank(withdrawValue)
  };




  return (
    <div className="App container mx-auto px-4">
      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Banking App</h1>

          <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
              <p className="font-medium text-gray-500 uppercase dark:text-gray-300">Deposit</p>

              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" type="number" id='deposit-input' value={depositValue} onChange={(e) => {setDepositValue(e.target.value)}}/>


              <br></br>

              <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 focus:ring focus:ring-green-300 focus:ring-opacity-80" onClick={depositOnclickHandler}>
                Deposit
              </button>
            </div>

            <div className="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg">
              <p className="font-medium text-gray-200 uppercase">Current Balance</p>

              <br></br>

              <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
                ${bank}
              </h2>

              <br></br>

            </div>

            <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
              <p className="font-medium text-gray-500 uppercase dark:text-gray-300">Withdraw</p>

              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" type="number" id='withdraw-input' value={withdrawValue} onChange={(e) => {setWithdrawValue(e.target.value)}}/>

              <br></br>

              <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-80" onClick={withdrawOnclickHandler}>
                Withdraw              
              </button>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;
