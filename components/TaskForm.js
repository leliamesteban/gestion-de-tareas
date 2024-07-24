import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ChangeLanguage from '../components/ChangeLanguage';
import useTranslation from 'next-translate/useTranslation';
import '../app/globals.css';

const TaskForm = ({ task }) => {

  const { t } = useTranslation('common');

  const [formData, setFormData] = useState({
    title: task ? task.title : '',
    description: task ? task.description : '',
    date: task ? task.date : '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = task ? 'PUT' : 'POST';
    const url = task ? `http://localhost:3001/tasks/${task.id}` : 'http://localhost:3001/tasks';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(() => {
      router.push('/tasks');
    });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <ChangeLanguage />
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{task ? t('editTask') : t('createTask')}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">{t('title')} </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">{t('description')} </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">{t('date')} </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
          {task ? t('updateTask') : t('createTask')}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
