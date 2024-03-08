export default ({
  language,
  setLanguage,
}) => {
  return (
    <div className="mt-4 flex items-center justify-center text-base">
      <label className="mr-4">
        <input
          type="radio"
          value="Chinese"
          checked={language === 'Chinese'}
          onChange={() => setLanguage('Chinese')}
          className="mr-1"
        />
        Chinese
      </label>

      <label>
        <input
          type="radio"
          value="English"
          checked={language === 'English'}
          onChange={() => setLanguage('English')}
          className="mr-1"
        />
        English
      </label>
  </div>
  );
}
