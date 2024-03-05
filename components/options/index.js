import Select from 'react-select';

const voices = [
  {value: 'zh-CN-XiaoxiaoNeural', label: 'zh-CN-XiaoxiaoNeural, Female'},
  {value: 'zh-CN-YunxiNeural', label: 'zh-CN-YunxiNeural, Male'},
  {value: 'en-US-AnaNeural', label: 'en-US-AnaNeural, Female'},
  {value: 'en-US-AndrewNeural', label: 'en-US-AndrewNeural, Male'},
];


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
