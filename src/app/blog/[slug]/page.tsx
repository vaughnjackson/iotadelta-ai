import { sanityClient } from '@/lib/sanityClient';
import { PortableText } from '@portabletext/react';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await sanityClient.fetch(`*[_type == "blog"]{slug}`);
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(`*[_type == "blog" && slug.current == $slug][0]{title, content, nudge}`, { slug: params.slug });
  
  if (!post) {
    return (
      <main className="min-h-screen bg-gray-900 text-white p-8 pt-16">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Post Not Found</h1>
          <p className="mt-4">The blog post you're looking for doesn't exist.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 pt-16">
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