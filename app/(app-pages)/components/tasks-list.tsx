import Task from '../today/components/task';

export default function TasksList() {
  return (
    <section>
      <ul className="flex flex-col gap-gap-md">
        <Task status="done" />
        <Task status="in progress" />
        <Task status="to do" />
      </ul>
    </section>
  );
}
