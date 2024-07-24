import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TaskForm from '../../../components/TaskForm';

const EditTaskPage = () => {
  const [task, setTask] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/tasks/${id}`)
        .then((response) => response.json())
        .then((data) => setTask(data));
    }
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return <TaskForm task={task} />;
};

export default EditTaskPage;
