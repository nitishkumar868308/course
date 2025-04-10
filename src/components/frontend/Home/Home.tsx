import React from 'react'
import HeroSlider from '../HeroSlider/HeroSlider'
import TopTrendingCourses from '../TopTrendingCourses/TopTrendingCourses'
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed'
import RecentAdditions from '../RecentAdditions/RecentAdditions'
import TopCategories from '../TopCategories/TopCategories'
import WhatPeopleSay from '../WhatPeopleSay/WhatPeopleSay'
import OurClients from '../OurClients/OurClients'

const Home = () => {
    return (
        <>
            <HeroSlider />
            <TopTrendingCourses />
            <RecentlyViewed />
            <RecentAdditions />
            <TopCategories />
            <WhatPeopleSay />
            <OurClients />
        </>
    )
}

export default Home