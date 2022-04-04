import React, { VFC, memo } from 'react';
import { Link } from 'react-router-dom';

import Checkbox from 'elements/Checkbox';

import { StyledWrapper } from './Item.styled';

import { DataElement } from 'types';

type Props = {
  isRead: boolean;
  handleChange: (id: number) => void;
} & DataElement;

const Item: VFC<Props> = ({ id, subject, isRead, handleChange }) => (
  <StyledWrapper>
    <Checkbox label={subject} value={isRead} onChange={() => handleChange(id)} />
    <Link to={`details/${id}`}>Details</Link>
  </StyledWrapper>
);

export default memo(Item);
