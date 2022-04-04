import React, { useCallback, VFC } from 'react';

import Item from './Item';

import { StyledWrapper } from './List.styled';

import useStore from 'store';

import dataMock from 'mocks';

const List: VFC = () => {
  const { checkIsRead, addToRead, removeFromRead } = useStore();

  const handleChange = useCallback(
    (id: number) => {
      if (checkIsRead(id)) {
        removeFromRead(id);
      } else {
        addToRead(id);
      }
    },
    [addToRead, removeFromRead, checkIsRead]
  );

  return (
    <StyledWrapper>
      {dataMock.map((el) => (
        <Item key={el.id} isRead={checkIsRead(el.id)} handleChange={handleChange} {...el} />
      ))}
    </StyledWrapper>
  );
};

export default List;
