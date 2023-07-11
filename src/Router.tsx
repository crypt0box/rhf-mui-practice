import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { ApiResponse } from './components/page/ApiResponse';
import { ImageList } from './components/page/ImageList';
import { Range } from './components/page/Range';
import { RhfValidate } from './components/page/RhfValidate';
import { TablePerformance } from './components/page/TablePerformance';
import { UserInput } from './components/page/UserInput';
import { ZodTransform } from './components/page/ZodTransform';
import { PageFrame } from './PageFrame';
import { RhfFieldArray } from './components/page/RhfFieldArray';
import { Memo } from './components/page/Memo';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageFrame />}>
          <Route index element={<App />} />
          <Route path='/rhfValidate' element={<RhfValidate />} />
          <Route path='/range' element={<Range />} />
          <Route path='/apiResponse' element={<ApiResponse />} />
          <Route path='/userInput' element={<UserInput />} />
          <Route path='/zodTransform' element={<ZodTransform />} />
          <Route path='/tablePerformance' element={<TablePerformance />} />
          <Route path='/imageList' element={<ImageList />} />
          <Route path='/rhfFieldArray' element={<RhfFieldArray />} />
          <Route path='/memo' element={<Memo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
