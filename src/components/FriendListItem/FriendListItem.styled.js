import styled from '@emotion/styled';

export const Status = styled.span`
  /* display: inline-block; */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;
export const Name = styled.p`
  font-size: 18px;
  line-height: 1.62;
  font-weight: 18px;
  margin-left: 20px;
`;
