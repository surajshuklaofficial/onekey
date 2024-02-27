import { Metadata } from "next";

import { columns } from "@/components/dashboard/persons/columns";
import { DataTable } from "@/components/dashboard/persons/data-table";
import { AddNewPerson } from "@/components/dashboard/persons/add-new-person";
import { AddNewGroup } from "@/components/dashboard/persons/add-new-group";

export const metadata: Metadata = {
  title: "Persons",
  description: "A task and issue tracker build using Tanstack Table.",
};

export default async function Persons() {
  return (
    <div className="hidden flex-col space-y-8 px-4 md:flex mb-4">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Person</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of all persons connected!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <AddNewGroup />
          <AddNewPerson />
        </div>
      </div>
      <DataTable columns={columns} />
    </div>
  );
}
