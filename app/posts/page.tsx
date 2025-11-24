"use client";
import React, { useEffect, useState } from "react";

type Post = { id: number; title: string; content?: string; createdAt: string };

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function fetchPosts() {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
    setTitle("");
    setContent("");
    fetchPosts();
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Posts (CRUD Demo)</h1>

      <form onSubmit={handleCreate} style={{ marginBottom: 16 }}>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <br />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <br />
        <button type="submit">Create</button>
      </form>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.content}
          </li>
        ))}
      </ul>
    </main>
  );
}
