import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: #222222;
`;

export const PageHeaderActions = styled.div`
  display: flex;
  button {
    margin-left: 20px;
  }
`;

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding: 10px 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;

  text-align: left;

  th,
  td {
    padding-left: 20px;
  }

  th {
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 5px;

    text-transform: uppercase;

    color: #79accd;

    &:last-child {
      color: transparent;
    }
  }
`;

interface TBodyRowProps {
  hasAlert: boolean;
}

export const TBodyRow = styled.tr<TBodyRowProps>`
  height: 64px;
  color: #222222;
  border-radius: 5px;

  cursor: pointer;

  font-weight: ${(props) => (props.hasAlert ? 'bold' : 'normal')};
  background: ${(props) => (props.hasAlert ? '#FFFFFF' : '#F8FAFC')};

  td {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;

    &:first-child {
      border-left: 1px solid #e5e5e5;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-right: 1px solid #e5e5e5;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
