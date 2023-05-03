import React from "react";

const Blog = () => {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="max-w-7xl px-4 mx-auto sm:px-6">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>

        <div class="flow-root mt-12 sm:mt-16">
          <div class="divide-y divide-gray--200 -my-9">
            <div class="py-9">
              <p class="text-xl font-semibold text-black">
                What is the difference between uncontrolled and controlled
                components?
              </p>
              <p class="mt-3 text-base text-gray-600">
                The uncontrolled components meaning that directly connect with
                the real dom it have no controlled to the parent components. The
                uncontrolled components like any component that using to useRef
                that is uncontrolled components. Otherwise control components
                are change do something when the parent components change or not
                change. The controlled components depend on the parent component
                when the state changes it do something.
              </p>
            </div>

            <div class="py-9">
              <p class="text-xl font-semibold text-black">
                How to validate React props using PropTypes?
              </p>
              <p class="mt-3 text-base text-gray-600">
                Prop are using to pass data to the other components it is very
                useful to pass through any type of data. We want to pass data
                parent component to the child components, we need to validate
                the data type to confirm to child components what data is
                expects. Then we are using PropTypes to validate the props data
                we are using external package to validate data like prop-types
                that means we cant pass any data type what we want to pass like
                boolean, number, string, function, array, object etc.
              </p>
            </div>

            <div class="py-9">
              <p class="text-xl font-semibold text-black">
                What is the difference between nodejs and express js.
              </p>
              <p class="mt-3 text-base text-gray-600">
                Node js are mainly using to backend to serve the data this is
                the javascript server side language to work in backend. Using
                node js we can do any thing in backend like create api other
                thing. On the other hand express js is the node js framework. It
                is mainly using to do something hard and long code easy to right
                using express js you can create api easily. But the node js
                create the api it lot of code to write then coming express to
                easy our work.
              </p>
            </div>
            <div class="py-9">
              <p class="text-xl font-semibold text-black">
                What is a custom hook, and why will you create a custom hook?
              </p>
              <p class="mt-3 text-base text-gray-600">
                A custom hook means you can create a hook you can use any time
                anywhere we want. Main reason to create a custom hook is reuse
                stateful logic. A custom hook have some function to do the
                little work like get some data. The react library have spacial
                looks like useState, useEffect, useFef etc. But we want do
                something new but there was no inbuilt custom hook then we can
                create a custom hook that help me do this particular work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
