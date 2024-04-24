import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { User } from '@/types/User';

import { Button } from './ui/button';
import DatePicker from './ui/datepicker';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const formSchema = z.object({
  birthday: z.date(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.union([z.literal('editor'), z.literal('viewer')]),
});

type FormValues = z.infer<typeof formSchema>;

type UserFormProps = {
  onSuccess?: () => void;
  user?: User;
};

export default function UserForm({ user }: UserFormProps) {
  const { register, setValue, handleSubmit } = useForm<FormValues>({
    defaultValues: user
      ? {
          birthday: user.birthday,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        }
      : undefined,
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormValues) {
    if (user) {
      await fetch(`/api/users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
      });
    } else {
      await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">User Form</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('firstName')} placeholder="First name" />
        <Input {...register('lastName')} placeholder="Last name" />
        <Input {...register('email')} placeholder="Email" />
        <DatePicker
          defaultValue={user ? user.birthday : undefined}
          onChange={(date) => {
            if (date) {
              setValue('birthday', date);
            }
          }}
        />
        <Select
          defaultValue={user ? user.role : undefined}
          onValueChange={(value: FormValues['role']) => setValue('role', value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="viewer">Viewer</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
