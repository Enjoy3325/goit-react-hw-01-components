import styled from '@emotion/styled';

export const Status = styled.span`
  /* display: inline-block; */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;
