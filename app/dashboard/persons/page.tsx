import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "@/components/shared/columns";
import { UserNav } from "@/components/shared/user-nav";
import { DataTable } from "@/components/shared/data-table";
import { AddNewPerson } from "@/components/shared/add-new-person";

export const taskSchema = z.object({
  username: z.string(),
  person: z.string(),
  status: z.string(),
  primary_email: z.string(),
});

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  console.log(process.cwd());
  const data = await fs.readFile(
    path.join(process.cwd(), "/components/shared/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();
  console.log(tasks);
  return (
    <>
      <div className="hidden flex-col space-y-8 px-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Person</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all persons connected!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
            <AddNewPerson />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
