import React, { VFC } from 'react';
import { useParams } from 'react-router-dom';

import dataMock from 'mocks';

const Details: VFC = () => {
  const { id } = useParams();
  const currentItem = dataMock.find((item) => item.id === Number(id));

  if (!currentItem) {
    return <p>Item doesn`t exist :(</p>;
  }

  return (
    <>
      <p>Id: {currentItem.id}</p>
      <p>Subject: {currentItem.subject}</p>
      <p>Snippet: {currentItem.snippet}</p>
      <p>Sent date: {currentItem.sent_date}</p>
    </>
  );
};

export default Details;
