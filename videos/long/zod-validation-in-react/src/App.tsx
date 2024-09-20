import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const userFormSchema = z.object({
  firstName: z.string().nullish(),
  email: z.string().email(),
  profileUrl: z.string().url(),
  age: z.number().min(1),
  friends: z.array(z.string()).max(3),
  settings: z.object({
    isSubscribed: z.boolean(),
  }),
});

type UserForm = z.infer<typeof userFormSchema>;

export default function App() {
  const form = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  });

  function handleSubmit(data: UserForm) {
    const result = userFormSchema.safeParse(data);

    if (result.success) {
      // Handle success
    } else {
      // Handle error
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Cosden Solutions</h1>
    </div>
  );
}
