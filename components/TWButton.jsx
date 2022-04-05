import classMapMerge from '../lib/classMapMerge'

const TWButton = (props) => {
  const { classMap, ...reactProps } = props;

  return (
    <button
      className={
        classMapMerge(
          {
            fontColor: 'text-white',
            background: 'bg-indigo-800',
            rounded: 'rounded-full',
            padding: 'px-3 py-1'
          },
          classMap
        )
      }
      { ...reactProps }
    >
      {props.children}
    </button>
  );
}

TWButton.defaultProps = {
  
  children: "Button"
}

export default TWButton;