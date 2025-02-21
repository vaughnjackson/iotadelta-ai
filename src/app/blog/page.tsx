import React from 'react';
import { sanityClient } from '@/lib/sanityClient';
import Link from 'next/link';

export default async function Blog() {
  try {
    const posts = await sanityClient.fetch(`*[_type == "blog"]{title, slug, tags, nudge}`);
    console.log('Fetched posts:', posts); // Debug log

    return (
      <main className="min-h-screen bg-gray-900 text-white p-8 pt-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Blog</h1>
          {posts && posts.length > 0 ? (
            <div className="grid gap-6">
              {posts.map((post: any) => (
                <div key={post.slug.current} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  {post.tags && (
                    <div className="mt-2 flex gap-2">
                      {post.tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-1 bg-gray-600 rounded text-sm">{tag}</span>
                      ))}
                    </div>
                  )}
                  <p className="mt-4 italic text-gray-300">Try This: {post.nudge}</p>
                  <Link 
                    href={`/blog/${post.slug.current}`}
                    className="mt-4 inline-block text-blue-400 hover:text-blue-300"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">No posts yet</h2>
              <p className="text-gray-300">Check back soon for fresh insights and AI-powered nudges!</p>
            </div>
          )}
        </section>
      </main>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return (
      <main className="min-h-screen bg-gray-900 text-white p-8 pt-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Blog</h1>
          <div className="text-center py-12 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Unable to load posts</h2>
            <p className="text-gray-300">Please try again later.</p>
          </div>
        </section>
      </main>
    );
  }
} 