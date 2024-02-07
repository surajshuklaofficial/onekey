"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiCirclePlus } from "react-icons/ci";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUsersAsync } from "@/lib/action";


export function AddNewPerson() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Person>();

  const onSubmit: SubmitHandler<Person> = (data) => {
    console.log(data)
    const  temp = async (data: Person) => {
        const t = await createUsersAsync(data);
        console.log(t)
    }

    temp(data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <CiCirclePlus style={{ fontWeight: "500" }} /> &nbsp; Add New Person
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add New Person</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3" autoComplete="on" {...register("primary_email", { required: true })}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" className="col-span-3" autoComplete="on"  {...register("username", { required: true })} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input id="password" className="col-span-3" autoComplete="one"  {...register("password", { required: true })}/>
          </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
