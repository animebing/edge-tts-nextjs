export default ({
  text,
  setText,
  setAudioUrl,
}) => {
  const changeHandler = (event) => {
    setText(event.target.value);
    setAudioUrl('');
  };

  return (
    <div className="mt-4">
      <textarea 
        placeholder="type in text here"
        rows="10"
        className="w-full text-lg p-2 border-2 border-solid rounded-md"
        value={text}
        onChange={changeHandler}
      >
      </textarea>
    </div>
  );
}
