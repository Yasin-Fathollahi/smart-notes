import Button from './components/button';
import Select from './components/inputs/select';

export default function Home() {
  return (
    <div className="text-center">
      <h1>home</h1>
      <Button size="lg" type="link" href="#" variant="primary">
        This is a test button
      </Button>

      <Select
        id="drop-down-1"
        label="test drop down"
        options={['opt-1', 'opt-2', 'opt-3']}
      />
    </div>
  );
}
