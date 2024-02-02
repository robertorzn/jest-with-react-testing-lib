const Button = ({
  disabled = false,
  children,
  onClick,
  }: {
    disabled?: boolean,
    children: React.ReactNode,
    onClick: (n: number) => void;
}) => {
  return (
    <button 
      onClick={() => onClick(1)}
      style={{
        backgroundColor: disabled ? 'red' : 'green',
        color: 'white',
        padding: 10
      }}
    >
      {children}
    </button>
  )
}

export default Button