import Header from '@/app/components/headers/regular-header';
import DateInput from '@/app/components/date-input';
import Select from '@/app/components/UI/inputs/select';
import TextInput from '@/app/components/UI/inputs/text';

export default function AddProject() {
  return (
    <div>
      <Header heading="Add Project" />
      <main>
        <form action="" className="flex flex-col gap-6 relative">
          <Select
            id="sdfas"
            label="Task Group"
            options={['Work', 'Personal', 'School']}
            colorName="pink"
          />
          <TextInput id="project-name" label="Project Name" length="short" />
          <TextInput
            id="project-description"
            label="Description"
            length="long"
          />
          <DateInput label="Start Date" />
          <DateInput label="End Date" />
        </form>
      </main>
    </div>
  );
}
