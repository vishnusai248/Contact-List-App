import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Createcontact from './components/Createcontact/Createcontact';
import { createContext, useState } from 'react';
import dummyContacts from './contactsdata';

export const datacontenxt= createContext()

function App() {

  const [contacts, setcontacts] = useState(dummyContacts)
  return (
    <HashRouter>
    <datacontenxt.Provider value={{contacts,setcontacts}}>

      <div className='d-flex flex-column h-100 darktheme'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Main />} />
          {/* <Route path='/AddContact' element={<Createcontact />} /> */}
          <Route path='/AddContact/:id' element={<Createcontact  />} />

        </Routes>
      </div>
    </datacontenxt.Provider>
    </HashRouter>
  );
}

export default App;
