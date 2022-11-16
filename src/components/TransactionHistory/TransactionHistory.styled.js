import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  /* display: flex;
  flex-direction: column; */
  table-layout: auto;
  border: 2px solid silver;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  width: 400px;
  margin: 60px auto;
  padding: 5px;
  background-color: beige;
`;
export const Thead = styled.thead`
  background-color: #08c9ff;
`;
export const TrColumn = styled.tr`
  :nth-of-type(even) {
    background-color: #d8bb33;
  }
`;
export const TdString = styled.td`
  border: 2px solid silver;
`;
