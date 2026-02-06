export const Loader = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`}></div>
);
