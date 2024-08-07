import { PostData } from "@/lib/types";
import React from "react";
interface CommentsProps {
  post: PostData;
}

export default function Comments({ post }: CommentsProps) {
  return <div>Comments</div>;
}
