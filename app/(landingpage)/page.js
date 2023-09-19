'use client'

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <div className="relative px-8 py-24 lg:grid lg:grid-cols-4 lg:px-24">
          <div className="relative before:absolute before:h-[250%] before:w-full before:-translate-x-1/4 before:rounded-full before:bg-gradient-radial before:from-[#182848] before:to-transparent before:blur-2xl before:content-[''] before:opacity-60 before:z-[-1] col-span-3 flex flex-col justify-center text-blue-100">
            <h1 className="drop-shadow-[0_0_0.2rem_#d3d6e070] font-bold leading-tight mb-4 text-3xl md:text-5xl lg:text-7xl">
              High-Return Investments{' '}
              <span className="italic">For Everyone</span>
            </h1>
            <h2 className="drop-shadow-[0_0_0.2rem_#d3d6e070] font-light md:text-2xl">
              What if you had access to investment opportunities normally
              available only to the super-rich?
            </h2>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </main>
    </>
  )
}
