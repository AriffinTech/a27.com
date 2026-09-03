import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { GridCard } from '@/components/ui/grid-card';

type NavItemType = {
  title: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'group/navigation-menu relative z-10 flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-2',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        'group hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)] focus:bg-[var(--color-paper-2)] focus:text-[var(--color-ink)] data-[state=open]:bg-[var(--color-paper-2)] data-[state=open]:text-[var(--color-ink)] inline-flex w-max items-center justify-center rounded-[var(--radius-md)] px-4 py-2 text-[var(--text-sm)] font-semibold text-[var(--color-ink-2)] transition-colors outline-none disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto',
        'group-data-[viewport=false]/navigation-menu:bg-[var(--color-paper)] group-data-[viewport=false]/navigation-menu:text-[var(--color-ink)] group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-[var(--radius-md)] group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:border-[var(--color-rule)] group-data-[viewport=false]/navigation-menu:shadow-lg group-data-[viewport=false]/navigation-menu:duration-300',
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 isolate z-50 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'origin-top-center bg-[var(--color-paper)]/95 supports-[backdrop-filter]:bg-[var(--color-paper)]/60 text-[var(--color-ink)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-rule)] shadow-lg backdrop-blur-xl md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:bg-[var(--color-paper-2)] data-[active=true]:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)] focus:bg-[var(--color-paper-2)] focus:text-[var(--color-ink)] [&_svg:not([class*='text-'])]:text-[var(--color-muted)] flex flex-col justify-center gap-1 rounded-[var(--radius-md)] px-4 py-2 text-[var(--text-sm)] font-medium text-[var(--color-ink-2)] transition-colors outline-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="bg-[var(--color-rule)] relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

function NavGridCard({
  link,
  ...props
}: React.ComponentProps<'div'> & {
  link: NavItemType;
}) {
  return (
    <NavigationMenuPrimitive.Link asChild>
      <a href={link.href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] rounded-[var(--radius-md)]">
        <GridCard {...props}>
          {link.icon && (
            <link.icon className="text-[var(--color-accent)] relative size-6 mb-4" />
          )}
          <div className="relative">
            <span className="text-[var(--color-ink)] text-[var(--text-sm)] font-bold">
              {link.title}
            </span>
            {link.description && (
              <p className="text-[var(--color-muted)] mt-1.5 text-xs">
                {link.description}
              </p>
            )}
          </div>
        </GridCard>
      </a>
    </NavigationMenuPrimitive.Link>
  );
}

function NavSmallItem({
  item,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
  item: Omit<NavItemType, 'description'>;
}) {
  return (
    <NavigationMenuLink
      className={cn(
        'group relative h-max flex-row items-center gap-x-3 px-3 py-2.5',
        className,
      )}
      {...props}
    >
      {item.icon && <item.icon className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />}
      <p className="text-[var(--text-sm)] font-medium text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)] transition-colors">{item.title}</p>
      <div className="relative ml-auto flex h-full w-4 items-center">
        <ArrowRightIcon className="size-4 -translate-x-2 opacity-0 text-[var(--color-accent)] transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </NavigationMenuLink>
  );
}

function NavLargeItem({
  link,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
  link: NavItemType;
}) {
  return (
    <NavigationMenuLink
      className={cn(
        'bg-[var(--color-paper)] group relative flex flex-col justify-center border border-[var(--color-rule)] p-0 hover:border-[var(--color-accent)] transition-colors',
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <div className="space-y-1">
          <span className="text-[var(--text-sm)] leading-none font-bold text-[var(--color-ink)]">{link.title}</span>
          {link.description && (
            <p className="text-[var(--color-muted)] line-clamp-1 text-xs">
              {link.description}
            </p>
          )}
        </div>
        {link.icon && <link.icon className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors size-6" />}
      </div>
    </NavigationMenuLink>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavGridCard,
  NavSmallItem,
  NavLargeItem,
  type NavItemType,
};
