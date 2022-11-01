type InputProps = React.ComponentProps<"input">;

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-blue_light w-full p-1 rounded text-left text-blue"
    />
  );
}

export default Input;
