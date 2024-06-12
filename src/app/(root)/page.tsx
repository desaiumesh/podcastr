"use client";
import PodcastCard from '@/components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import LoaderSpinner from '@/components/LoaderSpinner';
import PodcastDetailCard from '@/components/PodcastDetailCard';
import Link from 'next/link';

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  const latestPodcasts = useQuery(api.podcasts.getLatestPodcasts);
  const popularPodcasts = useQuery(api.podcasts.getPopularPodcasts);

  if (!trendingPodcasts) return <LoaderSpinner />
  if (!latestPodcasts) return <LoaderSpinner />
  if (!popularPodcasts) return <LoaderSpinner />

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts?.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
            <PodcastCard
              key={_id}
              imgUrl={imageUrl as string}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}
        </div>
      </section>
      <section className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <h1 className="text-20 font-bold text-white-1">Latest Podcasts</h1>
          <Link href="/discover" className="text-16 font-semibold text-orange-1">
            See all
          </Link>
        </div>
        {latestPodcasts?.map(({ _id, podcastTitle, views, audioDuration, imageUrl }) => (
          <PodcastDetailCard
            key={_id}
            imgUrl={imageUrl as string}
            title={podcastTitle}
            views={views}
            audioDuration={audioDuration}
            podcastId={_id}
          />
        ))}
      </section>
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Popular Podcasts</h1>
        <div className="podcast_grid">
          {popularPodcasts?.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
            <PodcastCard
              key={_id}
              imgUrl={imageUrl as string}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home