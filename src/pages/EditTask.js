import { useParams } from "react-router";

const EditTask = () => {
  const params = useParams();

  return <p>task #{params.taskId}</p>;
};

export default EditTask;
