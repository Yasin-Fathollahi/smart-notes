type TextInputProps = {
  id: string;
  label: string;
  length: 'long' | 'short';
};

export default function TextInput({ id, label, length }: TextInputProps) {
  return (
    <div className="input text-text-default flex flex-col gap-3 text-left">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      {length === 'short' ? (
        <input
          id={id}
          type="text"
          className="focus:outline-primary-semi-light"
        />
      ) : (
        <textarea
          id={id}
          rows={3}
          className="focus:outline-primary-semi-light resize-none"
        />
      )}
    </div>
  );
}
