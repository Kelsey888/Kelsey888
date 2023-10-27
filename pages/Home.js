import FormAddTask from '../components/form_add_task';
import ListTasks from '../components/list_tasks';


function Home(props) {
  // render UI
  return (
    <>
      <FormAddTask />
      <ListTasks />
    </>

  );
}

export default Home;