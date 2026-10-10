import { useEffect, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { searchSchema, type SearchFormValues } from '@/schemas/searchSchema';
import { Button } from '@/components/ui/button';
import removeIcon from '@/assets/icons/close.svg';

export default function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const urlQuery = searchParams.get('q') ?? '';
  const initialQuery = urlQuery;

  const { control, register, setValue, getValues } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: initialQuery,
    },
  });

  const query = useWatch({
    control,
    name: 'query',
  });

  const { ref: formRef, ...inputProps } = register('query');

  // Sinkronkan perubahan URL ke input, misalnya saat Back/Forward.
  useEffect(() => {
    if (urlQuery !== getValues('query')) {
      setValue('query', urlQuery, {
        shouldValidate: true,
      });
    }
  }, [urlQuery, getValues, setValue]);

  // Debounce sebelum memperbarui URL.
  useEffect(() => {
    const normalizedQuery = query.trim();

    if (normalizedQuery.length > 100) return;
    if (normalizedQuery === urlQuery) return;

    const timer = window.setTimeout(() => {
      setSearchParams(
        (previousParams) => {
          const nextParams = new URLSearchParams(previousParams);

          if (normalizedQuery) {
            nextParams.set('q', normalizedQuery);
          } else {
            nextParams.delete('q');
          }

          return nextParams;
        },
        { replace: true }
      );
    }, 400);

    return () => window.clearTimeout(timer);
  }, [query, urlQuery, setSearchParams]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className='flex min-w-0 w-full items-center gap-md'>
      <Input
        {...inputProps}
        ref={(element) => {
          formRef(element);
          inputRef.current = element;
        }}
        type='text'
        placeholder='Search Movie'
        aria-label='Search movies'
        autoComplete='off'
      />

      {query && (
        <Button
          type='button'
          aria-label='Clear search'
          onClick={() => {
            setValue('query', '', {
              shouldValidate: true,
            });
            inputRef.current?.focus();
          }}
        >
          <img src={removeIcon} alt='' />
        </Button>
      )}
    </div>
  );
}
