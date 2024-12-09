import Typography from "@/components/ui/typography";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "./animation";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useMemo, useState } from "react";
import { Toaster } from "@/components/ui/toaster";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email" })
    .min(1, { message: "Email is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  topic: z.string().min(1, { message: "Topic is required" }),
  detail: z.string(),
});

export default function HeroSection() {
  const { elementRef, isVisible } = useSectionAnimation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      detail: "",
    },
  });
  const { handleSubmit, control, reset } = form;
  const toast = useToast();

  const [open, setOpen] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);

    toast.toast({
      title: "Message Sent",
      description: "I will get back to you as soon as possible.\n Thank you!",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
    setOpen(false);
    reset();
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-4 rounded-lg border-[1px] border-neutral-800 p-4 text-center md:flex-row md:p-6"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      ref={elementRef}
    >
      <div className="w-1/2 min-w-[200px] md:w-full">
        <motion.img
          src="/images/me.png"
          alt="Profile"
          className="w-full rounded-lg"
          variants={childVariants}
        />
      </div>
      <motion.div
        className="flex w-full flex-col gap-4 p-4"
        variants={childVariants}
      >
        <Typography variant="h3">Hi, I'm Benz </Typography>
        <div className="flex w-full flex-col">
          <Typography
            variant="h1"
            gradient="custom"
            className="from-secondary to-sky-400"
          >
            TEERAPAT
          </Typography>
          <Typography
            variant="h1"
            gradient="custom"
            className="from-secondary to-sky-400"
          >
            CHANTARAMANEE
          </Typography>
        </div>
        <Typography variant="body" className="text-neutral-400">
          Passionate Software Engineer, specializing in full-stack development
          and scalable web applications.
        </Typography>
        <div className="mt-2 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Contact Me</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Contact Me</DialogTitle>
              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Topic</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="detail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detail</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-1/3 self-center">
                    Submit
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
          <Button>Projects</Button>
        </div>
      </motion.div>
      <Toaster />
    </motion.div>
  );
}
