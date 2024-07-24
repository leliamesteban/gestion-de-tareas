import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import ChangeLanguage from '../components/ChangeLanguage';
import '../app/globals.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { t } = useTranslation('common');

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <ChangeLanguage />
      <h1 className="text-3xl font-bold mt-4 mb-0 text-gray-800">{t('taskList')}</h1>

      <button>
        <a href="/tasks/new" className="inline-block space-y-4 mt-6 mb-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
        {t('createTask')}
        </a>
      </button>

      <div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 border rounded shadow-sm bg-white hover:bg-gray-100">
            <Link href={`/tasks/${task.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
               {task.title}
            </Link>
            <p className="text-black"><span className="font-bold">{t('id')}</span>: {task.id}</p>
            <p className="text-black"><span className="font-bold">{t('date')}</span>: {task.date}</p>
            <p className={task.completed ? 'text-green-600' : 'text-red-600'}>{task.completed ? t('completed') : t('notCompleted')}</p>
          </li>
        ))}
      </ul>
      </div>
      </div>
  );
};

export default TaskList;
