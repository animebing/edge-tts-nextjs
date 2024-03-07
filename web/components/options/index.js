import Select from 'react-select';
import { voices } from '@/lib/constants';

export default ({
  voice,
  setVoice,
}) => {
  return (
    <div className='mt-4 text-center'>
      <Select
        placeholder="select one voice"
        isSearchable={false}
        defaultValue={voice}
        onChange={setVoice}
        options={voices}
      />
    </div>
  );
}
