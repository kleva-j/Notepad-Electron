import { DashboardSearch } from "@/routes";
import {
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@repo/ui/components/ui/breadcrumb";

export default function Page() {
  return (
    <>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <DashboardSearch.Link>Search</DashboardSearch.Link>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </>
  );
}
