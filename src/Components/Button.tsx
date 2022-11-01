type ButtonProps = {
  children: string;
  hoverColor: "red" | "blue" | "green";
} & Omit<React.ComponentProps<"button">, "children">;

function Button(props: ButtonProps) {
  const { children, hoverColor, ...rest } = props;

  return (
    <button
      className={`bg-gray_dark py-2 rounded-full text-white w-full hover:bg-${hoverColor}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
