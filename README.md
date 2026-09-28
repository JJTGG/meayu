# Meayu

**Make something for someone.**

Meayu turns what you know about someone into something made specifically for them.

You provide the person, the context, and the things that matter. Meayu organizes them into a personal digital experience that you can review, approve, and share.

## Core idea

> You provide the meaning. Meayu makes something from it.

The fundamental transformation is:

**Knowledge → Selection → Composition → Experience**

The creator supplies the personal meaning and approved material. Meayu handles the work of organizing, presenting, and delivering the resulting experience.

## MVP

The first version focuses on:

**Create → Prepare → Review → Approve → Publish → Experience**

Creators can:

- create a person
- add memories, messages, interests, and notes
- upload photos
- create an experience
- preview and edit it
- approve a version
- publish it
- share a private link

Recipients do not need an account.

## Architecture

Meayu is a modular monolith built with:

- Next.js
- React
- TypeScript
- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage
- Vercel

The application is organized around:

- people
- context
- assets
- events
- experiences
- publishing
- delivery

Intelligence is optional and is not required for the core product.

## Current status

V0 — Foundation.

The project is being built incrementally, one verified slice at a time.