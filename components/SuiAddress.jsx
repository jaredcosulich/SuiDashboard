import { useState } from 'react';
import { SuiObject } from '.';
import { callRpc } from '../lib';

const Address = ({ address }) => {
  const [showObjects, setShowObjects] = useState(false);
  const [objects, setObjects] = useState();

  const onClick = async () => {
    if (!objects && !showObjects) {
      const { objects } = await callRpc(`/objects?address=${address}`);
      setObjects(objects);
    }

    setShowObjects(!showObjects);
  };

  return (
    <div>
      <div
        className='cursor-pointer'
        onClick={onClick}
      >
        {showObjects ? <>&#9660;</> : <>&gt;</>}
        &nbsp;
        {address}
      </div>
      {showObjects && (
        <>
          {objects && objects.map((object, index) => (
            <div 
              key={`object-${index}`} 
              className='text-xs py-3'
            >
              <SuiObject object={object} />
            </div>
          ))}
          {!objects && <div>Loading...</div>}
        </>
        
      )}
    </div>
  )

}

export default Address;