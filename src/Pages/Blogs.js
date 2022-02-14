import React from 'react';
import Tittle from '../components/Title';
import allBlogs from '../components/allBlogs';
import styled from 'styled-components';

function BlogsPage() {
    return (
        <BlogStyled>
            <div className="b-title">
                <Tittle title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </BlogStyled>
    )
}
const BlogStyled = styled.div`
.BlogsPage{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.5rem;
    @media screen and (max-width: 1080px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 2rem;
    }
    .blog{
        background-color:#161925;
        width: 100%;
        padding: 1rem;
        overflow: hidden;
        .blog-content{
            overflow: hidden;
            padding-bottom: 2rem;
            img{
                width: 100%;
                transition: all .2s ease-in-out;
                &:hover{
                    transform: scale(1.1);
                }
                padding-bottom: 2rem;
            }
            .blog-link{
                color: inherit;
                font-family: inherit;
                text-decoration: none;
                font-size: 2rem;
                padding-bottom: 2rem;
                transition: all .4s ease-in-out;
                &:hover{
                    color: #037FFF;
                }
            }
        }
    }
}

.b-title{
    margin-bottom: 4rem;
}


`;

export default BlogsPage;
