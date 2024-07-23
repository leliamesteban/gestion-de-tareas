import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TaskDetail = ({ taskId }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (taskId) {
      fetch(`http://localhost:3001/tasks/${taskId}`)
        .then((response) => response.json())
        .then((data) => setTask(data))
	.catch(error => console.error('Error fetching task:', error));
    }
  }, [taskId]);

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Date: {task.date}</p>
      <button onClick={() => router.push(`/tasks/${task.id}/edit`)}>
        Edit Task
      </button>
    </div>
  );
};

export default TaskDetail;
