import React, { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import List from 'components/List';
import Details from 'components/Details';
import NotFound from 'components/NotFound';

import { StyledWrapper } from './App.styled';

const App: VFC = () => (
  <StyledWrapper>
    <Header />
    <Routes>
      <Route path="/">
        <Route index element={<List />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </StyledWrapper>
);

export default App;
