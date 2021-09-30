import Layout from "../components/Layout";
import Link from "next/link";

import { skills, experinces, projects } from "../profile";

const index = () => (
  <Layout>
    {/* header */}

    <header className="row">
      <div className="col-md-12">
        <div className="card card-body text-white bg-primary mb-3">
          <div className="row">
            <div className="col-md-4">
              <img
                src="profile.jpeg"
                alt="profile image"
                className="img-fluid "
              />
            </div>
            <div className="col-md-8">
              <h1>Jesus Vargas</h1>
              <h3>Jr Developer</h3>
              <p>
                Creative at solving problems with growing mentality,
                communicative. Autodidact on the newest developer's technologies
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* second section */}

    <div className="row">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skill, percentaje }, index) => (
              <div className="py-2" key={index}>
                <h1>{skill}</h1>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: ` ${percentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>

            {experinces.map(({ title, description, from }, index) => (
              <div className="py-2" key={index}>
                <ul>
                  <li>
                    <h3>{title}</h3>
                    <h5>{from}</h5>
                    <p>{description}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Portafolio */}

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body text-white bg-primary mb-3">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-white">Portofolio</h1>
            </div>

            {projects.map(({ name, description, image }, index) => (
              <div className="col-md-4 p-2" key={index}>
                <div className="card h-100">
                  <div className="overflow">
                    <img
                      src={image}
                      alt="inspirational"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body text-primary">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#!">Know more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">Portfolio</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default index;
