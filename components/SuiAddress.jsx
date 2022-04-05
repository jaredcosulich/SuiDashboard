import { useState } from 'react';
import { SuiObject } from '.';
import { callRpc } from '../lib';
import store from 'store2';

const Address = ({ address }) => {
  const [name, setName] = useState();
  const [showObjects, setShowObjects] = useState(false);
  const [objects, setObjects] = useState();

  const onClick = async () => {
    if (!objects && !showObjects) {
      const { objects } = await callRpc(`/objects?address=${address}`);
      setObjects(objects);
    }

    setShowObjects(!showObjects);
  };

  const saveName = (e) => {
    let name = e.target.value;
    if (name && name.length === 0) name = null;
    store.namespace(address)('name', name)
    setName(name);
  }

  return (
    <div>
      <div
        className='cursor-pointer'
        onClick={onClick}
      >
        {showObjects ? <>&#9660;</> : <>&gt;</>}
        &nbsp;
        {name || address}
      </div>
      {showObjects && (
        <div>
          <div className='text-sm py-3'>
            <span className='font-semibold mr-1'>
              Name
            </span>
            <input
              type='text'
              value={name}
              onChange={saveName}
              className='border p-1'
            />
          </div>
          {name && (
            <div className='text-xs text-slate-600 mb-3'>
              {address}
            </div>
          )}
          {objects && objects.map((object, index) => (
            <div 
              key={`object-${index}`} 
              className='text-xs py-3'
            >
              <SuiObject object={object} />
            </div>
          ))}
          {!objects && <div>Loading...</div>}
        </div>
        
      )}
    </div>
  )

}

export default Address;