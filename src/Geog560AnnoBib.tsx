import { Button } from "@/components/ui/button"
import { SiteNav } from "./SiteNav"

export function Geog560AnnoBib() {
  return (
    <div className="flex flex-col min-h-svh p-6 bg-[url('./assets/background.jpg')] bg-no-repeat bg-contain bg-center">
      <SiteNav></SiteNav>
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">GEOG 560 Annotated Bibliography</h1>
          <p>This site is currently under development.</p>
          <p>Please check back soon!</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

export default Geog560AnnoBib
