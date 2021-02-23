import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../blog/BlogCard';
import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader'


const HighlightedBlogs = ({posts, loading}) => (
    <div>
        <PageHeader title="My Recent Blogs">
        Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. 
        This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
        </PageHeader>
        <div className="container">
            { loading
                ? <Loader className="has-text-primary"></Loader>
                :
                <div className="blog-posts columns is-multiline">
                { posts
                    .sort((a, b) => a.fields.date < b.fields.date ? 1 : -1)
                    .slice(0, 3)
                    .map(({fields}, i) =>
                    <BlogCard key={i} {...fields} />
                )}
                </div>
            }
            <div className="level-left">
                <Link className="level-item button is-small is-link is-outlined" to={'/blog'}>
                See All My Blogs</Link>
            </div>
        </div>
    </div>
)
  
export default HighlightedBlogs;
