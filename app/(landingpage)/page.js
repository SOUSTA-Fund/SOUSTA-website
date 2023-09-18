'use client'

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <div className="relative px-8 py-24 lg:grid lg:grid-cols-4 lg:px-24">
          <div className="col-span-3 flex flex-col justify-center text-blue-100">
            <h1 className="font-bold leading-tight mb-4 text-3xl md:text-5xl lg:text-7xl">
              High-Return Investments{' '}
              <span className="italic">For Everyone</span>
            </h1>
            <h2 className="font-light md:text-2xl">
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
