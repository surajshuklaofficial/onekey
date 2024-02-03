"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { labels, priorities, statuses } from "./data";
import { Task } from "./schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "username",
    accessorFn: (row) => `${row.person} ${row.username}`,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Person & Username" />
    ),
    cell: ({ row }) => (
      <div className="w-[200px] flex flex-col">
        <span className="text-nowrap text-black">{row.getValue("person")}</span>
        <span className="text-gray-500">{row.getValue("username")}</span>
      </div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    id:"primary_email",
    accessorKey: "primary_email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Primary Email" />
    ),
    cell: ({ row }) => (

      <div className="flex items-center">
        <span>{row.getValue("primary_email")}</span>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
