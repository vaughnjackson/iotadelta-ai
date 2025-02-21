import { sanityClient } from '@/lib/sanityClient';

export default async function Blog() {
  const posts = await sanityClient.fetch(`*[_type == "blog"]{title, slug, tags, nudge}`);
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="mt-6 grid gap-6">
          {posts.map((post: any) => (
            <div key={post.slug.current} className="p-4 bg-gray-800 rounded">
              <h2 className="text-xl">{post.title}</h2>
              <p className="mt-2 text-gray-400">{post.tags.join(', ')}</p>
              <p className="mt-2 italic">Try This: {post.nudge}</p>
              <a href={`/blog/${post.slug.current}`} className="mt-2 inline-block text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 