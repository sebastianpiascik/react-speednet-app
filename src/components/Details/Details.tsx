import React, { VFC } from 'react';
import { useParams } from 'react-router-dom';

import Link from 'elements/Link';

import { StyledWrapper } from './Details.styled';

import dataMock from 'mocks';

const Details: VFC = () => {
  const { id } = useParams();
  const currentItem = dataMock.find((item) => item.id === Number(id));

  if (!currentItem) {
    return (
      <StyledWrapper>
        <p>Item doesn`t exist :(</p>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <Link to="/">Back to list</Link>
      <p>Id: {currentItem.id}</p>
      <p>Subject: {currentItem.subject}</p>
      <p>Snippet: {currentItem.snippet}</p>
      <p>Sent date: {currentItem.sent_date.toLocaleString()}</p>
    </StyledWrapper>
  );
};

export default Details;
