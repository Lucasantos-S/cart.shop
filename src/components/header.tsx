import { Separator } from '@radix-ui/react-separator'
import { ChefHat, Home } from 'lucide-react'

import NavLink from './nav-link'

export default function Header() {
  return (
    <div className="border-b ">
      <div className="flex h-16 items-center gap-6 px-6 lg:container ">
        <ChefHat className="h-6 w-6" />
        <Separator
          orientation="vertical"
          className="h-6 w-[2px] bg-muted-foreground/50"
        />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
