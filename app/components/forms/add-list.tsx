'use client';
import DateInput from '@/app/components/date-input';
import Select from '@/app/components/UI/inputs/select';
import TextInput from '@/app/components/UI/inputs/text';

export default function AddList() {
  return (
    <main>
      <form action="" className="flex flex-col gap-6 relative">
        <Select
          id="add-list-select"
          label="Task Group"
          options={['Work', 'Personal', 'School']}
          colorName="pink"
        />
        <TextInput id="project-name" label="Project Name" length="short" />
        <TextInput id="project-description" label="Description" length="long" />
        <DateInput label="Start Date" />
        <DateInput label="End Date" />
      </form>
    </main>
  );
}
