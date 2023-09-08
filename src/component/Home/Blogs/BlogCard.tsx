import React from "react";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  const truncatedText = text.substr(0, maxLength);
  return (
    truncatedText.substr(
      0,
      Math.min(truncatedText.length, truncatedText.lastIndexOf(" "))
    ) + "..."
  );
};

const BlogCard = ({ blog }: any) => {
  const truncatedContent = truncateText(blog.content, 150);
  return (
    <div className="w-[480px] bg-indigo-50 border border-gray-200 rounded-lg shadow h-[200px]">
      <a href="/">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5 flex-col flex justify-between h-full">
        <div>
          <a href="/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {blog.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">{truncatedContent}</p>
        </div>

        <a
          href="/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 w-4/5"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
