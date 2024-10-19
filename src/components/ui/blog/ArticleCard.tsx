import React from "react"

import Container from "../Container"

interface ArticleCardProps {
  //id: string;
  img: string
  title: string
  body: string
  author: string
  date: string
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  img,
  title,
  body,
  author,
  date
}) => {

  const maxBodyLength = 100;
  const truncatedBody = body.length > maxBodyLength ? `${body.slice(0, maxBodyLength)}...` : body;
  
  return (
    <div className="my-5 flex cursor-pointer flex-col shadow-xl transition duration-300 hover:scale-105 rounded-lg">
      <div className="block rounded-lg shadow-sm shadow-indigo-100">
        <img
          className="h-56 w-full transform rounded-md object-cover"
          src={img}
          alt={title}
        />
      </div>
      <div className="p-5">
        <div className="mt-2 w-full">
          <dl>
            <div className="flex flex-col">
              <div className="sr-only"></div>
              <div className="font-semibold">{title}</div>
            </div>
          </dl>
        </div>
        <div className="mt-2 items-center gap-8 text-lg font-semibold">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div>{truncatedBody}</div>
          </div>
          <div className="mt-1 flex flex-row space-x-5">
            <span className="font-semibold">Được đăng bởi :</span>
            <span className="font-light">{author}</span>
          </div>
          <div className="mt-1 flex flex-row space-x-5">
            <span className="font-semibold">Vào lúc :</span>
            <span className="font-light">{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
