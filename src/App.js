import {Routes, Route} from 'react-router-dom';

import Wall from './component/page/wall';
import DirectList from './component/page/direct/directList';
import SingleDirectPage from './component/page/direct/directSingle'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Wall />}></Route>
        <Route path='/direct-list' element={<DirectList />}>
          <Route path=':id' element={<DirectList />} />
          <Route path=':id/:slug' element={<DirectList />} />
        </Route>
        <Route path='/single-direct-page' element={<SingleDirectPage />}>
          <Route path=':id' element={<SingleDirectPage />} />
          <Route path=':id/:slug' element={<SingleDirectPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
