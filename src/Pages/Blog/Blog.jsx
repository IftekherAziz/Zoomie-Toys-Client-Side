import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mb-20">
      <div className="my-10  text-4xl font-bold text-center text-gray-800 dark:text-white">
        Blog
        <hr className="mt-5 mb-12 w-1/12 mx-auto bg-slate-500 h-1" />
      </div>
      <div className="gap-8 sm:flex m-6">
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/2 dark:bg-gray-800">
          <img
            data-aos="fade-up"
            src="https://stytch.com/blog/wp-content/uploads/2022/01/How-a-refresh-token-is-generated-and-used-1.png"
            alt="Blog-Image"
          />
          <h4 className="py-4 text-xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h4>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            An access token is a credential that grants permission to access
            protected resources, typically issued by an authentication server. A
            refresh token is a credential used to obtain a new access token when
            the original token expires, without requiring the user to
            reauthenticate.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            Access tokens and refresh tokens are typically used in client-server
            architectures with token-based authentication. When a user
            successfully authenticates, an access token is issued and stored on
            the client-side (e.g., in a cookie or local storage). The client
            includes this token in subsequent requests to the server, allowing
            access to protected resources.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            Refresh tokens are securely stored on the client-side, often as an
            HTTP-only cookie. When the access token expires, the client sends
            the refresh token to the server to obtain a new access token without
            requiring user credentials. The server verifies the refresh tokens
            validity and issues a new access token, ensuring seamless
            authentication. It is crucial to store tokens securely, following
            best practices like HTTPS, token rotation, and protection against
            cross-site scripting (XSS) attacks.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/2 dark:bg-gray-800">
          <img
            data-aos="fade-up"
            src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg"
            alt="Blog-Image"
          />
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Compare SQL and NoSQL databases?
          </h3>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
            are two distinct types of database management systems.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            SQL databases are relational databases that store data in structured
            tables with predefined schemas. They ensure data integrity through
            strict relationships, enforce constraints, and support complex
            queries using SQL. SQL databases excel in handling complex
            transactions, maintaining data consistency, and ensuring ACID
            (Atomicity, Consistency, Isolation, Durability) properties. They are
            suitable for applications requiring structured data and well-defined
            relationships, such as financial systems or e-commerce platforms.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            NoSQL databases, on the other hand, are non-relational databases
            designed to handle unstructured or semi-structured data at a larger
            scale. They provide flexibility in schema design, allowing data to
            be stored in various formats like key-value pairs, documents,
            columnar, or graph models. NoSQL databases prioritize scalability,
            horizontal distribution, and high-performance reads and writes. They
            are often used in modern web applications, real-time analytics, and
            scenarios where data structures may evolve rapidly or lack a
            predefined schema.
          </p>
        </div>
      </div>
      <div className="gap-5 sm:flex m-6">
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/2 dark:bg-gray-800">
          <img
            data-aos="fade-up"
            src="https://procoders.tech/wp-content/uploads/2022/03/Express-JS-vs-Node-JS_-Why-its-Time-to-Migrate_-1.png"
            alt="Blog-Image"
          />
          <h4 className="py-4 text-xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            What is express js? What is Nest JS?
          </h4>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            Express.js is a minimal and flexible web application framework for
            Node.js. It provides a simple, unopinionated approach to building
            web applications and APIs. Express.js allows developers to handle
            HTTP requests and responses, define routes, implement middleware
            functions, and integrate with various templates and databases. It is
            lightweight, easy to learn, and widely used in the Node.js ecosystem
            for creating server-side applications.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            Nest.js, on the other hand, is a progressive and opinionated
            framework for building efficient, scalable, and maintainable
            server-side applications. It is built on top of Express.js and
            leverages TypeScript to provide a structured and object-oriented
            approach to application development. Nest.js follows the modular
            design pattern and uses decorators, dependency injection, and other
            advanced concepts to simplify the development process. It supports
            various modules and libraries, including database integration,
            authentication, and more. Nest.js is known for its extensibility,
            testability, and compatibility with modern JavaScript frameworks.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            Both Express.js and Nest.js are popular choices for building backend
            applications in the JavaScript and Node.js ecosystem. Express.js
            offers flexibility and simplicity, while Nest.js adds a structured
            and opinionated approach to application development, making it
            suitable for large-scale projects. The choice between the two
            depends on the specific project requirements, developer preferences,
            and the need for additional features and organization in the
            codebase.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/2 dark:bg-gray-800">
          <img
            data-aos="fade-up"
            src="https://www.mongodb.com/community/forums/uploads/default/optimized/3X/c/a/ca7fef9976e34003f87553bf3f7b0f2d44abee0e_2_1024x512.png"
            alt="Blog-Image"
          />
          <h4 className="py-4 text-xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            What is MongoDB aggregate and how does it work?
          </h4>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            MongoDB aggregate is a powerful framework used for data aggregation
            and processing within the MongoDB database. It allows users to
            perform complex data operations, such as filtering, grouping,
            transforming, and analyzing data, all in a single query.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            The aggregate framework operates on collections of documents and
            takes a pipeline-based approach. A pipeline consists of multiple
            stages, each performing a specific data transformation or operation.
            These stages are executed in a sequential manner, with the output of
            one stage serving as the input to the next stage.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            Each stage in the pipeline can perform various operations, including
            $match (filtering documents), $group (grouping and aggregating
            data), $project (selecting specific fields), $sort (sorting
            documents), and many more. These stages can be combined and
            customized to meet specific data processing needs.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            Aggregation pipelines in MongoDB offer powerful features like nested
            expressions, conditional operators, and mathematical calculations,
            allowing for complex data manipulations. The aggregation framework
            also supports the use of indexes for performance optimization.
          </p>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-justify">
            By utilizing the aggregate framework, developers can perform
            sophisticated data analysis and transformation operations
            efficiently within the MongoDB database, without needing to retrieve
            and process the data externally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
