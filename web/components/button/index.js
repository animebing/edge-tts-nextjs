import Loading from '@/components/loading'

export default ({
  loading,
  onClick,
}) => {
  return (
    <div className="mt-4">
      <button 
        disabled={loading}
        onClick={onClick}
        className="w-full flex items-center justify-center h-8 text-lg bg-blue-400 rounded-[4px]"
      >
        {loading ? (<><Loading /> Generating</>): "Generate Audio"}
      </button>
    </div>
  );
}
