import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoTrashBin, IoSquareOutline, IoSquare } from 'react-icons/io5';
import { useTheme } from 'styled-components';
import { toast } from 'react-toastify';

import TasksAPI from '../../../libs/api/tasks';

import ITaskDTO from '../../../dtos/ITaskDTO';

import {
  Container,
  TaskList,
  Task,
  CreateTaskContainer,
  Wrapper,
  DeleteTaskButton,
  Checkbox,
  TaskTitle,
  TitleInput,
  CreateTaskButton,
  Pagination,
  PrevPageButton,
  NextPageButton,
} from './styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const [tasks, setTasks] = useState<ITaskDTO[]>([]);
  const [tasksCount, setTasksCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [inputTitle, setInputTitle] = useState('');

  async function fetchData() {
    const data = await TasksAPI.getTasks(currentPage);

    setTasks(data.rows);
    setTasksCount(data.count);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  async function toggleFinished(data: ITaskDTO) {
    try {
      const dataToUpdate = { ...data, concluida: !data.concluida };

      const updatedTask = await TasksAPI.updateTask(dataToUpdate);

      const taskIndex = tasks.findIndex((item) => item.id === updatedTask.id);

      if (taskIndex !== -1) {
        const newTasksArray = [...tasks];
        newTasksArray[taskIndex] = updatedTask;

        setTasks(newTasksArray);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
        return;
      }
      if (err instanceof Error) toast.error(err.message);
    }
  }

  async function deleteTask(data: ITaskDTO) {
    try {
      await TasksAPI.deleteTask(data);

      toast.success('Tarefa excluída com sucesso!');

      fetchData();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
        return;
      }
      if (err instanceof Error) toast.error(err.message);
    }
  }

  async function createTask(title: string) {
    try {
      await TasksAPI.createTask(title);
      fetchData();

      toast.success('Tarefa criada com sucesso!');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data);
        return;
      }
      if (err instanceof Error) toast.error(err.message);
    }
  }

  return (
    <Container>
      <Wrapper>
        <CreateTaskContainer>
          <TitleInput
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <CreateTaskButton
            size={32}
            display={inputTitle ? 'block' : 'none'}
            onClick={() => {
              createTask(inputTitle);
              setInputTitle('');
            }}
          />
        </CreateTaskContainer>

        <TaskList>
          {tasks.map((task) => (
            <Task key={task.id}>
              <Checkbox onClick={() => toggleFinished(task)}>
                {task.concluida ? (
                  <IoSquare size={20} color={theme.colors.primaryDarker} />
                ) : (
                  <IoSquareOutline
                    size={20}
                    color={theme.colors.primaryDarker}
                  />
                )}
              </Checkbox>
              <TaskTitle concluida={task.concluida}>{task.titulo}</TaskTitle>
              <DeleteTaskButton onClick={() => deleteTask(task)}>
                <IoTrashBin size={20} color={theme.colors.primaryDarker} />
              </DeleteTaskButton>
            </Task>
          ))}
        </TaskList>

        {!!tasks.length && (
          <Pagination>
            <PrevPageButton
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {'<'}
            </PrevPageButton>
            <p>{currentPage}</p>
            <NextPageButton
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={Math.ceil(tasksCount / 5) === currentPage}
            >
              {'>'}
            </NextPageButton>
          </Pagination>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
