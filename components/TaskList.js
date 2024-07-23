import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { t } = useTranslation('common');

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>{t('taskList')}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/${task.id}`}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/tasks/new">
        {t('createTask')}
      </Link>
    </div>
  );
};

export default TaskList;
