import React from 'react';
import useSWR from 'swr';

import { Card } from './Card';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function GfmsContainer() {
  const { data, error, isLoading } = useSWR('/api/gfms', fetcher);

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

  return (
    <div className="flex flex-wrap">
      {formattedGfms.map(
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
  );
}
