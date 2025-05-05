type Props = {
  children: React.ReactNode;
};

function Card(props: Props) {
  const { children } = props;
  return <div className="shadow-lg bg-gray-50 rounded-2xl">{children}</div>;
}

export default Card;
