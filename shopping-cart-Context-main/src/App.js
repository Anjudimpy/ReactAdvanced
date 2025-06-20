import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomContext from './itemContext';

function App() {
  // const [total, setTotal] = useState(0);
  // const [item, setItem] = useState(0);
  // return (
  //       <itemContext.Provider value={{total,setTotal, item, setItem}}>
  //         <div className='App'>
  //         <h2>Shopping Cart</h2>
  //           <Navbar />
  //           <Items />
  //       </div>
  //       </itemContext.Provider>
  // );

  //CUSTOM PROVIDER

  return(
    <CustomContext>
      <div className='App'>
        <h2>Shopping Cart</h2>
             <Navbar />
             <Items />
         </div>
      
    </CustomContext>
   
  )
}
export default App;
