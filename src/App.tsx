import { SiteFrame } from "./SiteFrame"

export function App() {
  return (
    <SiteFrame>
        <div className="flex flex-col gap-6 self-center bg-black px-10 py-10 max-w-300 rounded-sm">
          <h1 className="text-lg self-center">Hello World!</h1>
          <div>
            <p>This site is currently under development.</p>
            <p>Please check back soon!</p>
          </div>
        </div>
    </SiteFrame>
  )
}

export default App
