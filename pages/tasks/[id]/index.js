import { useRouter } from 'next/router';
import TaskDetail from '../../../components/TaskDetail';

const TaskDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <TaskDetail taskId={id} />;
};

export default TaskDetailPage;
