'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
// import { toast } from 'sonner';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';
import { SelectI } from '@/interfaces/common/select-interface';

const FormSchema = z.object({
  language: z.string({
    // required_error: 'Please select a language.',
  }),
});

export function SelectForm(props: SelectI) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  //   function onSubmit(data: z.infer<typeof FormSchema>) {
  //     toast('You submitted the following values', {
  //       description: (
  //         <pre className='mt-2 w-[1000px] rounded-md bg-neutral-950 p-4'>
  //           <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
  //         </pre>
  //       ),
  //     });
  //   }

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-6 ${props.className}`}
      >
        <FormField
          control={form.control}
          name='language'
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel className='text-text-dark'>{props.label}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant='outline'
                      role='combobox'
                      className={cn(
                        'w-full justify-between text-text-dark px-2 py-7 rounded-xl',
                        !field.value && 'text-text font-normal',
                      )}
                    >
                      {field.value
                        ? props.options.find(
                            language => language.value === field.value,
                          )?.label
                        : `${props.placeholder}`}
                      {props.icon && (
                        <Image
                          src={props.icon}
                          alt=''
                          width={20}
                          height={20}
                        />
                      )}
                      {/* <ChevronsUpDown className='opacity-50 text-primary' /> */}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='flex w-full bg-white cursor-pointer border'>
                  <Command className=' w-full flex'>
                    <CommandInput
                      placeholder='Search framework...'
                      className='h-9 px-3 border-none'
                    />
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup className='cursor-pointer w-full px- border'>
                        {props.options.map(option => (
                          <CommandItem
                            value={option.label}
                            key={option.value}
                            onSelect={() => {
                              form.setValue('language', option.value);
                            }}
                            className='flex cursor-pointer border-b border-b-primary text-text-dark'
                          >
                            {option.label}
                            <Check
                              className={cn(
                                'ml-auto',
                                option.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0',
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {/* <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type='submit'>Submit</Button>    */}
      </form>
    </Form>
  );
}
