import React from 'react';

export default function Home() {
  return (
    <div className='main'>
      <div className="cover d-flex w-100 h-100 p-3 mx-auto flex-column bg-dark text-light">
        <h1 className="my-5">The Yoga Aashram!</h1>
        <p className="hero">Hey There!<br />
          Tired of the unhealthy lifestyle? Want to see improvement in yourself? Want to see a better version
          of you, which is fit, physically, mentally and spiritually?<br/>
          Come, Join us on our journey of making life better and peaceful for everybody and help them become their better and happy version. All you need is dedication and will to improve.<br/>
          Register now to unleash the benefits of yoga into your lifestyle and let certified instructors transform you into better.</p>
        <a href="/register" className="btn btn-lg font-weight-bold btn-light">Register Now!</a>
      </div>
    </div>
  );
}
