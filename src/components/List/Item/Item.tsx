import React, { VFC, memo } from 'react';

import Checkbox from 'elements/Checkbox';
import Link from 'elements/Link';

import { StyledWrapper } from './Item.styled';

import { DataElement } from 'types';

type Props = {
  isRead: boolean;
  handleChange: (id: number) => void;
} & DataElement;

const Item: VFC<Props> = ({ id, subject, isRead, handleChange }) => (
  <StyledWrapper>
    <Checkbox label={subject} value={isRead} onChange={() => handleChange(id)} />
    <Link to={`details/${id}`}>details</Link>
  </StyledWrapper>
);

export default memo(Item);
