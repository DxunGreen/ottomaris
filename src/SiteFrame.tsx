import { SiteNav } from "./SiteNav"

export function SiteFrame({children, ...props}: React.ComponentProps<"div">) {
  return (
    <div className="flex flex-col min-h-svh p-6 bg-[url('./assets/background.jpg')] bg-no-repeat bg-fixed bg-cover bg-top"
      {...props}>
      <SiteNav></SiteNav>
      {children}
    </div>
  )
}