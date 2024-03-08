import Select from 'react-select';

export default ({
  voice,
  voices,
  onChange,
}) => {
  return (
    <div className='mt-4 text-center'>
      <Select
        isSearchable={false}
        value={voice}
        onChange={onChange}
        options={voices}
      />
    </div>
  );
}
