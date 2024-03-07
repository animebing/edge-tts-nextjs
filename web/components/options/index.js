import Select from 'react-select';
import { voices } from '@/lib/constants';

export default ({
  onChange,
}) => {
  return (
    <div className='mt-4 text-center'>
      <Select
        isSearchable={false}
        defaultValue={voices[0]}
        onChange={onChange}
        options={voices}
      />
    </div>
  );
}
