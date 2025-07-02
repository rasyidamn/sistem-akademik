import React from "react";
import { SidebarInset, SidebarTrigger } from "./ui/sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./ui/breadcrumb";
import { Separator } from "./ui/separator";

export default function AppSidebarInset({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <SidebarInset>
      <header className="flex sticky top-0 h-16 shrink-0 items-center gap-2 border-b px-4 bg-background">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Building</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <main className="w-full min-h-svh p-4 ">{children}</main>
    </SidebarInset>
  );
}
