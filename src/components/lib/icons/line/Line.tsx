type Props = {
  classname?: string
}

function Line(props: Props) {
  return (
    <div className={`flex items-center h-full ${props.classname}`}>
      <svg
        width="1"
        height="20"
        viewBox="0 0 1 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0.5" x2="0.5" y2="20" stroke="black" />
      </svg>
    </div>
  );
}

export default Line;
