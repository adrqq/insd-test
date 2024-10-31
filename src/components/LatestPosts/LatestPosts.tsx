'use server';
import latestPosts1 from '@/assets/images/latest-posts-1.png';
import latestPosts2 from '@/assets/images/latest-posts-2.png';
import latestPosts3 from '@/assets/images/latest-posts-3.png';

import Post from './components/Post';

export default async function LatestPosts() {
  return (
    <div className="mb-[120px]">
      <div className="text-[#1d1d1d] text-[50px] font-bold font-['Poppins'] leading-[60px] mb-[48px]">
        Latest posts
      </div>
      <div className="w-full flex-col justify-start items-center m-auto gap-12 inline-flex">
        <Post
          title="5 popular Rust web frameworks—which one is right for you?"
          text="From the simplicity of Poem to the full-featured speed of Actix, there's a Rust web framework for most every user and need."
          image={latestPosts1}
        />

        <Post
          title="JAVA VS PHP: WHICH LANGUAGE TO CHOOSE?"
          text="Choosing a programming language can be a major hurdle due to people lacking the necessary information to make the right decision."
          image={latestPosts2}
          isImageLeft={true}
        />

        <Post
          title="Dive into the world of an iOS Developer – career, salary, and skills"
          text="When it comes to developing iOS applications, there are two main programming languages that professionals use: Objective-C and Swift. Objective-C is a C language that has additional object-oriented design."
          image={latestPosts3}
        />
      </div>
    </div>
  );
}
