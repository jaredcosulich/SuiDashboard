import { useEffect, useState } from 'react';
import { callRpc } from '../lib';

const SuiObject = ({ object }) => {
  const [fields, setFields] = useState();

  useEffect(() => {
    const loadDetails = async () => {
      // const { data: { contents: { fields }} } = await callRpc(`object_info?objectId=${object.objectId}`);
      const response = await callRpc(`object_info?objectId=${object.objectId}`);
      console.log(response)
      // setFields(fields); 
    }

    loadDetails();
  }, [object])

  return (
    <div>
      <div
        className=''
      >
        <div className='font-semibold'>{object.objType}</div>
        <div className='text-slate-600'>{object.objectId}</div>
        {fields && (
          <div>
            {Object.keys(fields).filter((key) => key !== "id").map(
              (key, index) => (
                <div key={`field-${index}`} className='py-1'>
                  <span className='font-semibold mr-1'>{key}:</span>
                  <span>{fields[key]}</span>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  )

}

export default SuiObject;