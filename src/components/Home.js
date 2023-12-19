import React from 'react';

export default function Home() {
  return (
    <div className='main'>
      <div className="cover d-flex w-100 h-100 p-3 mx-auto flex-column bg-dark text-light">
        <h1 className="my-5">The Yoga Aashram!</h1>
        <p className="hero">Hey There!<br />
        Tired of an unhealthy lifestyle? Seeking improvement in yourself? Aspire to become a fitter, more balanced individual—physically, mentally, and spiritually?

Join us on a transformative journey towards a better and more peaceful life. We're dedicated to helping everyone become their happier and improved selves. All you need is the dedication and the will to enhance your well-being.

Register now to unlock the numerous benefits of yoga and let our certified instructors guide you towards a healthier and happier lifestyle. Embrace positive change and embark on a journey of self-improvement!</p>
        <a href="/register" className="btn btn-lg font-weight-bold btn-light">Register Now!</a>
      </div>
    </div>
  );
}
