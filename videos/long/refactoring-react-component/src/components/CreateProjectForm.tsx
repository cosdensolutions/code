import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  Control,
  useController,
  useForm,
  UseFormGetValues,
  UseFormSetValue,
} from 'react-hook-form';
import { z } from 'zod';
import TextInput from './TextInput';
import { useKeyDown } from '@/hooks/useKeyDown';

const createProjectFormSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  tasks: z.array(
    z.object({
      name: z.string(),
      duration: z.coerce.number().int().positive(),
    }),
  ),
});

type CreateProjectFormValues = z.infer<typeof createProjectFormSchema>;

export default function CreateProjectForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    setValue,
    getValues,
  } = useForm<CreateProjectFormValues>({
    resolver: zodResolver(createProjectFormSchema),
  });

  async function onSubmit(data: CreateProjectFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted!', data);
  }

  useKeyDown('Enter', () => handleSubmit(onSubmit)());

  return (
    <form
      className="flex w-[300px] flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        control={control}
        label="Project Name"
        name="name"
        placeholder="Project Name"
      />
      <TextInput
        control={control}
        label="Project Description"
        name="description"
        placeholder="Description"
      />

      <CreateProjectFormTasks
        control={control}
        getValues={getValues}
        setValue={setValue}
      />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

type CreateProjectFormTasksProps = {
  control: Control<CreateProjectFormValues>;
  getValues: UseFormGetValues<CreateProjectFormValues>;
  setValue: UseFormSetValue<CreateProjectFormValues>;
};

function CreateProjectFormTasks({
  control,
  getValues,
  setValue,
}: CreateProjectFormTasksProps) {
  const [numberOfTasks, setNumberOfTasks] = useState(0);

  const {
    formState: { errors },
  } = useController({ control, name: 'tasks' });

  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">Project Tasks</label>
      {Array.from({ length: numberOfTasks }).map((_, index) => (
        <div key={index} className="flex gap-2">
          <TextInput
            control={control}
            className="w-full"
            name={`tasks.${index}.name`}
            placeholder="Task Name"
          />
          <TextInput
            control={control}
            className="w-full"
            name={`tasks.${index}.duration`}
            type="number"
            placeholder="Duration"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setNumberOfTasks(numberOfTasks + 1);

          const existingTasks = getValues('tasks');

          setValue('tasks', [...existingTasks, { name: '', duration: 0 }]);
        }}
      >
        Add Task
      </button>
      {errors.tasks && (
        <span className="text-red-500">{errors.tasks.message}</span>
      )}
    </div>
  );
}
