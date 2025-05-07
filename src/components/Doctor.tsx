interface Props {
  children: React.ReactNode;
}

function Doctor(props: Props) {
  const { children } = props;
  return (
    <div className="px-8 flex items-end gap-8 border-t-gray-200 border-t-2 text-gray-400 hover:text-gray-800 transition duration-300">
      <img className="h-28" src="doctor.png" alt="doctor" />
      <div className="h-32 flex items-center">{children}</div>
    </div>
  );
}

export default Doctor;
