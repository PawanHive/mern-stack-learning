REST stands for Representational State Transfer.

In simple words:

 REST is a set of rules (architecture style) used to design APIs so that different systems can communicate over the internet in a clean and scalable way.

---

## What REST is about
REST uses HTTP and works on the idea of resources (data), like:

- users
- posts
- products

Each resource is identified by a URL.

## Core Principles of REST
1.  Client–Server Architecture

- Client (browser/app) and server are separate
- Both evolve independently

2. Stateless

- Server does not store client data
- Each request contains all required information

3. Uniform Interface

- Standard HTTP methods are used:

- `GET` → read data
- `POST` → create data
- `PUT` / `PATCH` → update data
- `DELETE` → remove data

4. Resource-Based

- Everything is treated as a resource 
- Resources are represented using JSON or XML (mostly JSON)

5. Representation

- Server sends data, not logic
- Usually in JSON format

## Why do we use REST?

We use REST because it makes communication between client and server simple, fast, and scalable.

## Important Links: 

1. [Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/) -- Learn whole documentation in free time (Very Important)

## Sigma Prime Note:

- REST (Representational State Transfer)

- REST is an architectural style that defines a set of constraints(rules) to be used for creating web services.