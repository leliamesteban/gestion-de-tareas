import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import ChangeLanguage from '../components/ChangeLanguage';
import '../app/globals.css';

const TaskDetail = ({ taskId }) => {
  const [task, setTask] = useState(null);
  const { t } = useTranslation('common');
  const router = useRouter();

  useEffect(() => {
    if (taskId) {
      fetch(`http://localhost:3001/tasks/${taskId}`)
        .then((response) => response.json())
        .then((data) => setTask(data))
    }
  }, [taskId]);

  if (!task) return <div>Loading...</div>;

  const daysDiff = Math.ceil((new Date(task.date) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <>
      <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
        <ChangeLanguage />
        <h1 className="text-3xl font-bold mb-4 mt-4 text-gray-800">{task.title}</h1>
        <p className="text-black"><span className="font-bold">{t('id')}</span>: {task.id}</p>
        <p className="text-black"><span className="font-bold">{t('description')}</span>: {task.description}</p>
        <p className="text-black"><span className="font-bold">{t('date')}</span>: {task.date}</p>
        <p className="text-black">
          {daysDiff >= 0 
            ? t('daysRemaining', { days: daysDiff }) 
            : t('daysPassed', { days: Math.abs(daysDiff) })
          }
        </p>
        <p className="text-black">{task.completed ? t('completed') : t('notCompleted')}</p>
        <button className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600" onClick={() => router.push(`/tasks/${task.id}/edit`)}>
          {t('editTask')}
        </button>
        <button className="inline-block mt-4 ml-4 px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600" onClick={() => completeTask(task.id)}>{t('completeTask')}</button>
      </div>
    </>
  );

  function completeTask(taskId) {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: true }),
    }).then(() => router.push('/tasks'));
  }

};

export default TaskDetail;
