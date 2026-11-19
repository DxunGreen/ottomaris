import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

type NavHeader = {
  name: string;
  items: {
    title: string;
    href: string;
    description: string
  }[]
};

const headers: NavHeader[] = [
  {
    name: "Projects",
    items: [{
      title: "GEOG 560 Annotated Bibliography",
      href: "/projects/geog-560-annotated-bibliography",
      description: "My final project for GEOG 560 at Oregon State University.",
    }]
  },
]

export function SiteNav() {
  return (
    <NavigationMenu className="flex-none bg-black mbe-5">
      <NavigationMenuList>
        <NavigationMenuItem className="flex">
          <ListItem 
            key="Home"
            title="Home"
            href="/"
          ></ListItem>
        </NavigationMenuItem>
        {headers.map((header) => (
          <NavigationMenuItem className="flex">
            <NavigationMenuTrigger>{header.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {header.items.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link to={href}><div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div></Link>} />
    </li>
  )
}
