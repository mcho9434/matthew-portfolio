import React from "react";
import Card from "../../components/Card";
const Portfolio = () => {
  return (
    <Card>
      <div className="mb-4">
        This is the portfolio page! Here's a list of stuff I've worked on or
        been a part of in the past:
      </div>
      <div className="">
        <div className="bg-black h-px my-2" />
        <div className="">
          <div className="flex w-full justify-between">
            <div>
              <span className="text-xl font-semibold mr-4 ">Beacons</span>
              <span className="!justify-self-end">
                San Francisco, California
              </span>
            </div>
            <span className="text-lg italic">
              August 2022 - December 2022 (15 weeks)
            </span>
          </div>
          <div>
            <div>
              &emsp;I worked at{" "}
              <a className="underline font-semibold" href="https://beacons.ai/">
                Beacons
              </a>{" "}
              as a software engineering intern in the fall semester of my junior
              year. Beacons is an early-stage startup focused on making an
              all-in-one toolkit for creators. I was a part of the growth team,
              focused on the core link-in-bio product(
              <a
                className="underline font-semibold"
                href="https://beacons.ai/mjycho"
              >
                Here's
              </a>{" "}
              mine).
            </div>
            <div>
              &emsp;I was a full time engineer on the team, trusted to deliver
              impactful features and solve key bugs on a timely basis. I
              particularly appreciated how my managers gave me the autonomy to
              truly have the responsibilites of a full-time engineer rather than
              an intern. For example, I'd maintain a similar contribution rate
              to other full-time engineers and participate in a variety of team
              meetings, from standups to sprint retros. Especially since it was
              an internship in place of university, I felt a greater pace of
              learning both in techincal skill but also in learning to
              communicate effectively with product managers and designers.
            </div>
            <div className="mt-2">
              <span className="font-semibold">Skills used: </span>
              <span>
                React, Typescript, TailwindCSS, PostgreSQL, Firebase, Docker,
                Jest+RTL
              </span>
            </div>
          </div>
        </div>
        <div className="bg-black h-px my-2" />
        <div className="">
          <div className="flex w-full justify-between">
            <div>
              <span className="text-xl font-semibold mr-4 ">Otis</span>
              <span className="!justify-self-end">Farmington, Connecticut</span>
            </div>
            <span className="text-lg italic">
              May 2022 - July 2022 (11 weeks)
            </span>
          </div>
          <div>
            &emsp;I worked at{" "}
            <a
              className="underline font-semibold"
              href="https://www.otis.com/en/us/"
            >
              Otis
            </a>{" "}
            as a software engineering intern in the summer before my junior
            year. Otis is a large corporation focused on manufacturing elevators
            and escalators on an international scale, founded in 1852. I worked
            on the Compass360 team, writing code for destination entry terminals
            like the one below:
            <img
              className="m-auto aspect-square	w-96"
              src="det.jpg"
              alt="compass360 DET"
            />
            &emsp;As an intern, I was tasked with dealing with deprecation
            issues of the software behind the terminal. The code had originally
            been written in JDK6(released 2006), but faced serious security
            risks starting in 2018. After trying to transpile the outdated
            codebase into a newer version of Java, I saw several roadblocks to a
            clean migration to a newer Java; many of the core features in the
            original code had been removed in newer versions, precluding a
            direct solution. Additionally, even if a translation was produced,
            it would be difficult to verify everything had carried over
            properly. As such, I took the initative to propose a React rewrite.
            Although key stakeholders were unknowing of React, I even took the
            time outside work to develop a short presentation to pitch this
            idea. Ove
          </div>
          <div className="mt-2">
            <span className="font-semibold">Skills used: </span>
            <span>
              React, PHP, Java(JDK6, JDK17, JDK21, applets), embedded software
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Portfolio;