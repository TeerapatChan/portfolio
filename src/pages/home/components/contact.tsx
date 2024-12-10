import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { Contact } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Typography from "@/components/ui/typography";
import { EmailParams, sendEmail } from "@/lib/email";
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

export function ContactForm() {
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
  const { handleSubmit, control, reset, clearErrors } = form;
  const toast = useToast();
  const [open, setOpen] = useState(false);

  const onSubmit = (data: EmailParams) => {
    sendEmail(data);

    toast.toast({
      title: "Message Sent",
      description: "I will get back to you as soon as possible.\n Thank you!",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });

    setOpen(false);
  };

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const Wrapper = isDesktop ? DialogWrapper : DrawerWrapper;
  return (
    <Wrapper
      open={open}
      onOpenChange={() => {
        setOpen(!open);
        clearErrors();
        reset();
      }}
    >
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-3/4 max-w-[500px] flex-col gap-4 lg:w-full lg:max-w-none"
        >
          <Typography variant="h3">Contact Me</Typography>
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
    </Wrapper>
  );
}

interface WrapperProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: () => void;
}

function DrawerWrapper({ children, open, onOpenChange }: WrapperProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button>
          <Contact size={16} className="mr-2" />
          Contact Me
        </Button>
      </DrawerTrigger>
      <DrawerOverlay>
        <DrawerTitle>
          <VisuallyHidden>Contact Me</VisuallyHidden>
        </DrawerTitle>
        <DrawerContent>
          <DrawerClose />
          {children}
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

function DialogWrapper({ children, open, onOpenChange }: WrapperProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Contact size={16} className="mr-2" />
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogTitle>
        <VisuallyHidden>Contact Me</VisuallyHidden>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
