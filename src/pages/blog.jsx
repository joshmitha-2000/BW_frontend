import React from 'react';

const blogData = [
  {
    id: 1,
    title: "GLX Bullwork: Smarter, Greener, and Ready to Perform",
    description: "This is the description for blog 1.",
    imageUrl: "https://www.bullworkmobility.com/blog/first.webp",
  },
  {
    id: 2,
    title: "Blog Title 2",
    description: "This is the description for blog 2.",
    imageUrl: "https://www.bullworkmobility.com/blog/second.webp",
  },
  {
    id: 3,
    title: "Blog Title 3",
    description: "This is the description for blog 3.",
    imageUrl: "https://www.bullworkmobility.com/blog/third.webp",
  },
  {
    id: 4,
    title: "Blog Title 4",
    description: "This is the description for blog 4.",
    imageUrl: "https://www.bullworkmobility.com/blog/four.webp",
  },
  {
    id: 5,
    title: "Blog Title 5",
    description: "This is the description for blog 5.",
    imageUrl: "https://www.bullworkmobility.com/blog/five.webp",
  },
  {
    id: 6,
    title: "Blog Title 6",
    description: "This is the description for blog 6.",
    imageUrl: "https://www.bullworkmobility.com/blog/six.webp",
  },
  {
    id: 7,
    title: "Blog Title 7",
    description: "This is the description for blog 7.",
    imageUrl: "https://www.bullworkmobility.com/blog/seven.webp",
  },
  {
    id: 8,
    title: "Blog Title 8",
    description: "This is the description for blog 8.",
    imageUrl: "https://www.bullworkmobility.com/blog/eight.webp",
  },
  {
    id: 9,
    title: "Blog Title 9",
    description: "This is the description for blog 9.",
    imageUrl: "https://www.bullworkmobility.com/blog/nine.webp",
  },
  {
    id: 10,
    title: "Blog Title 10",
    description: "This is the description for blog 10.",
    imageUrl: "https://www.bullworkmobility.com/blog/ten.webp",
  },
  {
    id: 11,
    title: "Blog Title 11",
    description: "This is the description for blog 11.",
    imageUrl: "https://www.bullworkmobility.com/blog/eleven.webp",
  },
  {
    id: 12,
    title: "Blog Title 12",
    description: "This is the description for blog 12.",
    imageUrl: "https://www.bullworkmobility.com/blog/twelve.webp",
  },
  {
    id: 13,
    title: "Blog Title 13",
    description: "This is the description for blog 13.",
    imageUrl: "https://www.bullworkmobility.com/blog/thirteen.webp",
  },
  {
    id: 14,
    title: "Blog Title 14",
    description: "This is the description for blog 14.",
    imageUrl: "https://www.bullworkmobility.com/blog/fourteen.webp",
  },
  {
    id: 15,
    title: "Blog Title 15",
    description: "This is the description for blog 15.",
    imageUrl: "https://www.bullworkmobility.com/blog/fifteen.webp",
  },
  {
    id: 16,
    title: "Blog Title 16",
    description: "This is the description for blog 16.",
    imageUrl: "https://www.bullworkmobility.com/blog/sixteen.webp",
  },
  {
    id: 17,
    title: "Blog Title 17",
    description: "This is the description for blog 17.",
    imageUrl: "https://www.bullworkmobility.com/blog/seventeen.webp",
  },
  {
    id: 18,
    title: "Blog Title 18",
    description: "This is the description for blog 18.",
    imageUrl: "https://www.bullworkmobility.com/blog/eighteen.webp",
  },
  {
    id: 19,
    title: "Blog Title 19",
    description: "This is the description for blog 19.",
    imageUrl: "https://www.bullworkmobility.com/blog/ninteen.webp",
  },
  {
    id: 20,
    title: "Blog Title 20",
    description: "This is the description for blog 20.",
    imageUrl: "https://www.bullworkmobility.com/blog/twenty.webp",
  },
  {
    id: 21,
    title: "Blog Title 21",
    description: "This is the description for blog 21.",
    imageUrl: "https://www.bullworkmobility.com/blog/twentyone.webp",
  },
];

export default function Blog({ limit }) {
  const itemsToShow = limit ? blogData.slice(0, limit) : blogData;

  return (
    <>
      <h1 className="text-3xl sm:text-3xl mt-16 font-semibold max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">
        READ OUR BLOGS
      </h1>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {itemsToShow.map(({ id, title, description, imageUrl }) => (
            <div
              key={id}
              className="flex flex-col rounded-xl shadow-lg overflow-hidden bg-white max-w-xs mx-auto"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-700 flex-grow text-sm">{description}</p>
                <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition self-start text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
}
