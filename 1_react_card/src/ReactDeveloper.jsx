import './ReactDeveloper.css';
import man1sqr from './pic/man1sqr.jpg';

function ReactDeveloper() {
  const person = {
    name: 'Justin Case',
    posts: 45,
    bio: 'Hello 👋, my name is Justin. I am UI developer working with React on variety of Jamstack projects. Part of my time is also dedicated to blogging and open source.',
    location: 'Copenhagen, Denmark',
    technologies: ['Javascript', 'React', 'Redux', 'Vue', 'Webpack', 'NodeJs', 'Webpack'],
    creationDate: '01.01.2023'
  };

  return (
    <>
      <div className="card mb-3 all-card" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4 left-side-card-background">
            <h6 className="left-side-card-text left-side-card-top-text ">{person.name}</h6>
            <img src={man1sqr} className="img-fluid" alt="Justin Case picture" />
            <p className="left-side-card-text left-side-card-bottom-text">{person.posts} posts</p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">Bio</h3>
              <p className="card-text bio-text">{person.bio}</p>
              <p className="card-text">
                <small className="text-body-secondary float-start link-underline">
                  View skills
                </small>
                <small className="text-body-secondary float-end ">
                  Joined: {person.creationDate}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactDeveloper;
