import React, { useState } from "react";
import styles from "styles/BlogLayout.module.css";
import { getDateFromDateTimeString, replaceAllInstance } from "utils";
import { MdOutlineShare } from "react-icons/md";
import { BsTwitter, BsFiles, BsClipboardCheck } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";

const PostHeader = props => {
  const { title, categories, date, id } = props;
  const [copied, setCopied] = useState(false);

  const linkToPost = `https://www.smartcomplyapp.com/blog/posts/${id}`;

  const handleCopyLinkToClipboard = () => {
    navigator.clipboard.writeText(linkToPost);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <header className={`grid lg:w-3/4 font-medium ${styles.primaryText}`}>
      <h2 className={`text-2xl font-semibold`}>{title}</h2>
      <span className="uppercase my-2 lg:w-3/5 text-sm">
        {categories
          .map(category => {
            return replaceAllInstance("-", " ", category);
          })
          .join(", ")}
      </span>
      <span>{getDateFromDateTimeString(date)}</span>
      <div
        className={`py-4 flex items-center lg:fixed lg:grid lg:justify-items-end right-20  ${styles.shareBar}`}
      >
        <a
          className="m-1 p-1 text-xl ml-0"
          href={`http://twitter.com/share?text=I just read an article on ${
            categories[0]
          } &url=${linkToPost}&hashtags=${categories.join(",")}`}
          target="_blank"
          rel="noreferer"
        >
          <BsTwitter />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${linkToPost}&amp;src=sdkpreparse`}
          className="m-1 p-1 text-xl"
          target="_blank"
          rel="noreferer"
        >
          <FaFacebookF />
        </a>
        <a
          href={`whatsapp://send?text=Check out this article: ${linkToPost} `}
          className="m-1 p-1 text-xl"
          target="_blank"
          rel="noreferer"
        >
          <RiWhatsappFill />
        </a>
        {/* <a href="#" className="m-1 p-1 text-xl">
          <RiInstagramFill />
        </a> */}
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${linkToPost}&title=${title}&summary=&source=SmartComplyApp`}
          className="m-1 p-1 text-xl"
          target="_blank"
          rel="noreferer"
        >
          <FaLinkedinIn />
        </a>
        <button
          className="m-1 p-1 text-xl"
          type="button"
          onClick={handleCopyLinkToClipboard}
          disabled={copied}
        >
          {copied ? (
            <span className="flex items-center ">
              <BsClipboardCheck />
              <small className="ml-1">copied</small>
            </span>
          ) : (
            <BsFiles />
          )}
        </button>
      </div>
    </header>
  );
};

export default PostHeader;
