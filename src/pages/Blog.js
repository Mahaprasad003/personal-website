import React from 'react';
import SimpleHeader from '../components/SimpleHeader';
import blogData from '../data/blog-posts.json';

const Blog = () => {
  return (
    <div className="blog-page">
      <SimpleHeader />

      <div className="container fade-in">
        <div className="blog-header">
          <h1>writing</h1>
          <p className="last-updated">external posts listed here; links open on Substack</p>
        </div>

  <div className="blog-content scroll-wrap">
          {blogData.posts.map((post, i) => (
            <a
              key={i}
              className="post-card"
              href={post.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{post.title}</h2>
              <div className="meta">{post.date}</div>
              <p className="excerpt">{post.excerpt}</p>
              <div className="tags">
                {post.tags && post.tags.map((t, j) => (
                  <span className="tag" key={j}>#{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-page { padding-bottom: 2rem }

        .container {
          max-width: 800px;
          margin: 0 auto;
          margin-top: 3rem;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          align-items: start;
        }

        .blog-header { position: sticky; top: 2rem }

  h1 { margin-bottom: 0.5rem; font-weight: 700 }
  .last-updated { color: var(--text-secondary); font-size: 0.9rem }

        .blog-content { display:flex; flex-direction:column }

        .post-card {
          padding: 0.9rem 1rem;
          border-radius: 8px;
          background: var(--card-bg);
          box-shadow: var(--shadow-elevation);
          text-decoration: none;
          color: inherit;
          transition: transform 160ms ease, box-shadow 160ms ease;
          display: block;
          border-bottom: 1px solid rgba(255,255,255,0.04); /* subtle separator */
        }

        .post-card + .post-card { margin-top: 0.5rem }

        .post-card:hover { transform: translateY(-4px) }
  .post-card h2 { margin:0 0 0.4rem 0 }
  .meta { font-size:0.9rem; color:var(--text-secondary) }
  .excerpt { margin:0.5rem 0 0 }
        .tags { display:flex; gap:0.5rem; flex-wrap:wrap }
        .tag { font-size:0.78rem; color:var(--text-secondary) }

        @media (max-width: 768px) {
          .container { grid-template-columns: 1fr; gap:2rem; padding:0 1rem }
          h1 { font-size:2.5rem }
        }
      `}</style>
    </div>
  );
};

export default Blog;
