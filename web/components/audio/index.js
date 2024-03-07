export default ({
  audioUrl,
}) => {
  return (
    <div className="mt-4">
      <audio 
        controls
        src={audioUrl}
        className="w-full"
      >
      </audio>
    </div>
  );
}
