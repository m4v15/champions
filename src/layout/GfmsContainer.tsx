import React, { useState } from 'react';
import useSWR from 'swr';

import { Card } from './Card';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function GfmsContainer() {
  const { data, error, isLoading } = useSWR('/api/gfms', fetcher);
  const [query, setQuery] = useState('');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data.result) return <div>Failed to load</div>;
  const formattedGfms = data.result
    .map(
      (gfm: {
        title: string;
        url: string;
        imageurl: string;
        progress: string;
      }) => ({
        ...gfm,
        rawProgress: Number(gfm.progress.replace(/[^0-9.-]+/g, '')),
      }),
    )
    .sort(
      (
        a: {
          title: string;
          url: string;
          imageurl: string;
          progress: string;
          rawProgress: number;
        },
        b: {
          title: string;
          url: string;
          imageurl: string;
          progress: string;
          rawProgress: number;
        },
      ) => a.rawProgress - b.rawProgress,
    );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const multipleSearch = (array: []) => {
    return array.filter((el: any) =>
      Object.keys(el).some((parameter: string) =>
        el[parameter].toString().toLowerCase().includes(query),
      ),
    );
  };

  const filtered = multipleSearch(formattedGfms);

  return (
    <>
      <div className="ml-2 flex max-w-xs items-center">
        <label htmlFor="filter" className="sr-only">
          Filter GoFundMes
        </label>
        <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          onChange={handleChange}
          placeholder="Filter by title"
          type="text"
          id="filter"
        />
      </div>
      <div className="flex flex-wrap">
        {filtered.map(
          (gfm: {
            title: string;
            url: string;
            imageurl: string;
            progress: string;
          }) => {
            return (
              <Card
                title={gfm.title}
                imageUrl={gfm.imageurl}
                progress={gfm.progress}
                url={gfm.url}
                target=""
                key={gfm.url}
              />
            );
          },
        )}
      </div>
    </>
  );
}
