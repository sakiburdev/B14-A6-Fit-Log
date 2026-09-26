const Loading = () => {
  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Banner Skeleton */}
      <div className="mb-12 grid min-h-[430px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Small Text */}
          <div className="h-4 w-24 animate-pulse rounded-md bg-[#1A1E25]" />

          {/* Heading - 2 Lines */}
          <div className="space-y-3">
            <div className="h-[58px] w-[85%] animate-pulse rounded-lg bg-[#1A1E25]" />
            <div className="h-[58px] w-[75%] animate-pulse rounded-lg bg-[#1A1E25]" />
          </div>

          {/* Description - 2 Lines */}
          <div className="space-y-2">
            <div className="h-3 w-[90%] animate-pulse rounded-md bg-[#171A20]" />
            <div className="h-3 w-[78%] animate-pulse rounded-md bg-[#171A20]" />
          </div>

          {/* Button */}
          <div className="h-11 w-32 animate-pulse rounded-xl bg-[#1A1E25]" />
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <div className="h-[300px] w-full max-w-[520px] animate-pulse rounded-2xl bg-[#1A1E25] sm:h-[350px]" />
        </div>
      </div>

      {/* Filter Skeleton */}
      <div className="mb-6">
        <div className="h-10 w-50 animate-pulse rounded-xl bg-[#171A20]" />
      </div>

      <div className="mb-6">
        <div className="h-5 w-[50%] animate-pulse rounded-md bg-[#171A20]" />
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#13161D]"
          >
            {/* Image */}
            <div className="h-52 w-full animate-pulse bg-[#1A1E25]" />

            {/* Content */}
            <div className="space-y-4 p-5">
              {/* Title */}
              <div className="h-5 w-3/4 animate-pulse rounded-md bg-[#1A1E25]" />

              {/* Category */}
              <div className="h-3 w-1/2 animate-pulse rounded-md bg-[#171A20]" />

              {/* Info */}
              <div className="flex gap-3">
                <div className="h-7 w-20 animate-pulse rounded-lg bg-[#171A20]" />
                <div className="h-7 w-20 animate-pulse rounded-lg bg-[#171A20]" />
              </div>

              {/* Button */}
              <div className="h-10 w-full animate-pulse rounded-xl bg-[#1A1E25]" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Loading;