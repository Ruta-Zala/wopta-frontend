interface ButtonProps{
  default: JSX.Element
  icon?: JSX.Element
  className: string
  style?: object
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div style={props.style} className={'inline-flex items-center justify-center cursor-pointer rounded-lg px-3 py-1.5 tracking-wider border '+ props.className}>
     
      {props.icon ? (
        <span className="mx-2">
          {props.icon}
        </span>
      ) : (
        <span className="h-7" />
      )}
       <span className="truncate">{props.default}</span>
    </div>
  );
};

export default Button;
