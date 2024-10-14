import React from 'react';
import Banner from './Banner';
import PostCard from '../blog/PostCard';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10'>
                <PostCard></PostCard>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;