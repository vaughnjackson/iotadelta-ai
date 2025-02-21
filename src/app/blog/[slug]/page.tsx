import { sanityClient } from '@/lib/sanityClient';
import { PortableText } from '@portabletext/react';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(`*[_type == "blog" && slug.current == $slug][0]{title, content, nudge}`, { slug: params.slug });
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="mt-6 prose prose-invert">
          <PortableText value={post.content} />
        </div>
        <p className="mt-4 italic">Try This: {post.nudge}</p>
      </section>
    </main>
  );
} 