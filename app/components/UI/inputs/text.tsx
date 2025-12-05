type TextInputProps = {
  id: string;
  label: string;
  length: 'long' | 'short';
};

export default function TextInput({ id, label, length }: TextInputProps) {
  return (
    <div className="input text-black flex flex-col gap-3 text-left">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      {length === 'short' ? (
        <input id={id} type="text" className="focus:outline-primary " />
      ) : (
        <textarea id={id} rows={3} />
      )}
    </div>
  );
}
