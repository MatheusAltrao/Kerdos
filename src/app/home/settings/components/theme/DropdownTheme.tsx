'use client'
import { useTheme } from 'next-themes'

const DropdownTheme = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col items-center  gap-8 xl:flex-row">
      <div className="flex flex-col gap-1">
        <button
          onClick={() => setTheme('light')}
          className="flex w-full max-w-[250px] flex-col  gap-1  "
        >
          <div
            className={`rounded  p-2 transition-colors  ${theme === 'light' ? ' border-2 border-border ' : 'border-2 border-transparent hover:border-border'}`}
          >
            <div className=" w-full space-y-4 divide-y divide-zinc-200 rounded border border-zinc-200 bg-white p-4 shadow   md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-zinc-300 "></div>
                  <div className="h-2 w-32 rounded-full bg-zinc-200 "></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-zinc-300 "></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-zinc-300 "></div>
                  <div className="h-2 w-32 rounded-full bg-zinc-200 "></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-zinc-300 "></div>
              </div>
            </div>
          </div>
        </button>

        <p className=" w-full text-center text-sm ">Light</p>
      </div>

      <div className="flex flex-col gap-1">
        <button
          onClick={() => setTheme('dark')}
          className=" w-full max-w-[250px]   "
        >
          <div
            className={`rounded  p-2 transition-colors  ${theme === 'dark' ? ' border-2 border-border ' : 'border-2 border-transparent hover:border-border'}`}
          >
            <div className=" w-full space-y-4 divide-y divide-zinc-800 rounded border border-zinc-800 bg-zinc-950 p-4 shadow   md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-zinc-700 "></div>
                  <div className="h-2 w-32 rounded-full bg-zinc-800 "></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-zinc-700 "></div>
              </div>
              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="mb-2.5 h-2.5 w-24 rounded-full bg-zinc-700 "></div>
                  <div className="h-2 w-32 rounded-full bg-zinc-800 "></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-zinc-700 "></div>
              </div>
            </div>
          </div>
        </button>

        <p className="w-full text-center  text-sm ">Dark</p>
      </div>
    </div>
  )
}

export default DropdownTheme
