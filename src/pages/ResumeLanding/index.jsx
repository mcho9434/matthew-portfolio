import React from "react";
import clsx from "clsx";

import Card from "../../components/Card";
import useIsMobile from "../../utils/useIsMobile";

const ResumeLanding = () => {
  const isMobile = useIsMobile();

  return (
    <Card>
      <div className={clsx("flex m-4 gap-2", { "flex-col": isMobile })}>
        {isMobile && (
          <img className="w-1/2 m-auto" src="matt.jpg" alt="CTC RFP" />
        )}

        <div className="mt-3">
          <div className="mt-2 text-lg font-semibold">
            &emsp;If you're on this page(rather than{" "}
            <a href="/" className="underline">
              this one
            </a>
            ), it means you came from my resume or a private link.
          </div>
          <div className="mt-2">
            &emsp;
            <a
              href="https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/"
              className="underline"
            >
              Studies
            </a>{" "}
            have found that the average user spends less than a minute before
            leaving a website. You can read all about the work I've done on my
            resume and in the portfolio section of this website, but I want to
            spend your valuable seconds emphasizing my{" "}
            <span className="font-bold">
              drive, communication, and ownership.
            </span>
          </div>
          <div className="mt-2">
            &emsp;Even as a college student, I've already devoted thousands of
            dev hours working with product managers, tech leads, and designers.
            I've learned through experience how to communicate my ideas clearly,
            but also to take ownership of my work when things go wrong. If I am
            responsible for a page or feature, I'm the first one to address
            potential issues and cover vulnerabilites. Furthermore, I'm the
            engineer who has the drive to spend the extra time making things to
            a high standard. While I consider myself a great coder, I truly
            believe I'm an oustanding team member for my ability to express
            myself clearly and fully take on responsibilities.
          </div>
          <div className="mt-2">
            &emsp;I know this is just my perspective, so I've even collected{" "}
            <a className="underline" href="recs.png" target="_blank">
              testimonials
            </a>{" "}
            on{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/matthew-cho-usc/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>{" "}
            from my previous managers who have observed these qualities. Please
            reach out, I would love to chat about future opportunities.
          </div>
        </div>
        {!isMobile && (
          <img className="w-1/2 m-auto" src="matt.jpg" alt="CTC RFP" />
        )}
      </div>
    </Card>
  );
};

export default ResumeLanding;
