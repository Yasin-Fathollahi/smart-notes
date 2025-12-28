import Task from './task';

export default function TasksList() {
  return (
    <section className="overflow-y-auto scrollbar mb-5">
      <ul className="flex flex-col gap-gap-md">
        <Task status="done" />
        <Task status="in progress" />
        <Task status="to do" />
        <Task status="to do" />
        <Task status="to do" />
        <Task status="to do" />
      </ul>
    </section>
  );
}
