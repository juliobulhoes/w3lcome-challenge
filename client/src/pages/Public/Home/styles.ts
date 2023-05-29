import styled from 'styled-components';

import { IoAddCircle } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 12px);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 420px;
  height: 100%;
`;

export const TaskList = styled.div`
  margin-top: 22px;
  width: 100%;
  padding: 0 18px;
  background-color: ${(props) => props.theme.colors.white};
  color: white;
  border-radius: 4px;

  max-height: 380px;
`;

export const Task = styled.div`
  margin: 22px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const TaskTitle = styled.p<{ concluida: boolean }>`
  display: flex;
  color: ${(props) =>
    props.concluida
      ? props.theme.colors.grey
      : props.theme.colors.primaryEvenDarker};
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 32ch;
  text-decoration: ${(props) => (props.concluida ? 'line-through' : 'none')};
`;

export const DeleteTaskButton = styled.button`
  margin-left: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export const CreateTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 62px;
  padding: 18px;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
`;

export const TitleInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 2px 0;
  border-radius: 4px;
  width: 342px;
  min-width: 120px;
  height: 36px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primaryLight};
  font-size: 18px;
  padding: 8px;
  color: ${(props) => props.theme.colors.primaryDarker};
`;

export const CreateTaskButton = styled(IoAddCircle)`
  width: 34px;
  height: 34px;

  color: ${(props) => props.theme.colors.primaryLight};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryDarker};
    transition: linear 0.2s;
  }
`;

export const Pagination = styled.div`
  width: 100%;
  margin-top: 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 62px;

  border-radius: 4px;

  font-weight: bold;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 42px;
    height: 32px;

    font-size: 20px;

    border-radius: 8px;
  }
`;

export const NextPageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 38px;
  height: 38px;

  font-size: 22px;

  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.grey};
    cursor: not-allowed;
  }
`;

export const PrevPageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 38px;
  height: 38px;

  font-size: 22px;

  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.grey};
    cursor: not-allowed;
  }
`;
