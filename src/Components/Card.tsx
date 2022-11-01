type CardTypes = {
  children: React.ReactNode;
};
function Card(props: CardTypes) {
  const { children } = props;
  return (
    <div className="text-center bg-white p-4 flex flex-col justify-between gap-4 rounded-lg flex-grow">
      {children}
    </div>
  );
}

export default Card;
