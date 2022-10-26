import React from "react";

const Blog = () => {
  return (
    <div className="p-4 grid md:grid-cols-3 gap-3">
      <div className="card w-full bg-neutral text-neutral-content my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">What is cors?</h2>
          <p>
            Cross-origin resource sharing (CORS) is a mechanism that allows
            restricted resources on a web page to be requested from another
            domain outside the domain from which the first resource was served.
            It is an HTTP-header based mechanism.
          </p>
        </div>
      </div>
      <div className="card w-full bg-neutral text-neutral-content my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            Firebase, Backend-as-a-Service (BaaS), is a platform by Google that
            provides authentications, functionalities and helps with the backend
            development of your Android, iOS, or web.
          </p>
          <p>Other options:</p>
          <ul>
            <li>STYTCH</li>
            <li>Ory</li>
            <li>Supabase</li>
            <li>Okta</li>
            <li>PingIdentity</li>
            <li>Keycloak etc.</li>
          </ul>
        </div>
      </div>
      <div className="card w-full bg-neutral text-neutral-content my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">How does the private route work?</h2>
          <p>
            PrivateRoute component is the blueprint for all private routes in
            the application. If the user is logged in, go on and display the
            component in question; otherwise, redirect the user to sign-in page.
            Additionally, we can define the logic of isLogin utility function
            separately in utils folder.
          </p>
        </div>
      </div>
      <div className="card w-full bg-neutral text-neutral-content my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title">What is Node? How does Node work?</h2>
          <p>
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests.<br></br>Node.js accepts the request from the
            clients and sends the response, while working with the request
            node.js handles them with a single thread. To operate I/O operations
            or requests node.js use the concept of threads. Thread is a sequence
            of instructions that the server needs to perform. It runs parallel
            on the server to provide the information to multiple clients.
            Node.js is an event loop single-threaded language. It can handle
            concurrent requests with a single thread without blocking it for one
            request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
